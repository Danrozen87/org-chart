<script lang="ts">
    import { onMount } from 'svelte';
    import { cn } from '/workspaces/org-chart/src/lib/utils'
    import { createDragStore } from './use-drag';
    import { createZoomStore } from './use-zoom';
    import ZoomControls from '/workspaces/org-chart/src/components/molecules/draggable-container/ZoomControls.svelte';
  
    let isMobile = false;

  export let className = "";

  let containerRef: HTMLDivElement;
  let lastPinchDistance = 0;

  const dragStore = createDragStore();
  const zoomStore = createZoomStore();

  $: scale = $zoomStore;

  const handleReset = () => {
    zoomStore.resetZoom();
    if (containerRef) {
      containerRef.scrollLeft = 0;
      containerRef.scrollTop = 0;
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      lastPinchDistance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const currentDist = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      
      const delta = currentDist - lastPinchDistance;
      const SENSITIVITY = 0.002;
      
      if (Math.abs(delta) > 1) {
        const zoomDelta = delta * SENSITIVITY;
        zoomStore.handleZoom(zoomDelta > 0 ? 'in' : 'out', Math.abs(zoomDelta));
        lastPinchDistance = currentDist;
      }
    }
  };

  onMount(() => {
    isMobile = window.innerWidth <= 768;
    const handleResize = () => {
      isMobile = window.innerWidth <= 768;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<div class="relative w-full h-full">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    bind:this={containerRef}
    class={cn(
      "overflow-auto overscroll-none",
      "w-full h-full",
      isMobile ? "touch-pan-x touch-pan-y" : "cursor-grab active:cursor-grabbing",
      "select-none",
      className
    )}
    on:mousedown={!isMobile ? (e) => dragStore.handleMouseDown(e, containerRef) : null}
    on:mouseup={!isMobile ? () => dragStore.handleMouseUp() : null}
    on:mousemove={!isMobile ? (e) => dragStore.handleMouseMove(e, containerRef, $dragStore) : null}
    on:mouseleave={!isMobile ? () => dragStore.handleMouseUp() : null}
    on:wheel={!isMobile ? (e) => zoomStore.handleWheel(e) : null}
    on:touchstart={isMobile ? handleTouchStart : null}
    on:touchmove={isMobile ? handleTouchMove : null}
  >
    <div 
      class={cn(
        "min-w-max min-h-full p-4 md:p-8 transform-gpu transition-transform duration-100",
        isMobile && "px-2"
      )}
      style="transform: scale({scale}); transform-origin: 50% 0%"
    >
      <slot />
    </div>
  </div>
  
  <ZoomControls
    onZoomIn={() => zoomStore.handleZoom('in')}
    onZoomOut={() => zoomStore.handleZoom('out')}
    onReset={handleReset}
    className={cn(
      "absolute bottom-4 right-4",
      isMobile && "bottom-6 right-6"
    )}
  />
</div>
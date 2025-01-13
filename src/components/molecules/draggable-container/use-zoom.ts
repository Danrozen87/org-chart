import { writable, derived, type Writable } from 'svelte/store';

export function createZoomStore(minZoom = 0.5, maxZoom = 2) {
  const scaleStore = writable(1);

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    scaleStore.update(prev => Math.min(Math.max(prev + delta, minZoom), maxZoom));
  };

  const handleZoom = (direction: 'in' | 'out', factor = 0.1) => {
    const delta = direction === 'in' ? factor : -factor;
    scaleStore.update(prev => {
      const newScale = prev + delta;
      return Math.min(Math.max(newScale, minZoom), maxZoom);
    });
  };

  const resetZoom = () => {
    scaleStore.set(1);
  };

  // Create a store that combines all the functionality
  const store = {
    subscribe: scaleStore.subscribe,
    handleWheel,
    handleZoom,
    resetZoom
  };

  return store;
}
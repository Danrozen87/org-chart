<script lang="ts">
    import { onMount } from 'svelte';
    import { cn } from '/workspaces/org-chart/src/lib/utils';
    import type { OrgChartProps } from '/workspaces/org-chart/src/types/org-types';
    import { getOrgChartStore } from '/workspaces/org-chart/src/stores/org-chart-stores'
    import OrgNodeRenderer from '/workspaces/org-chart/src/components/organisms/OrgNodeRenderer.svelte';
  
    export let data: OrgChartProps['data'];
    export let className = '';
    export let initialExpanded = false;
  
    const store = getOrgChartStore();
    let error = null as Error | null;
    let isLoading = false;
  
    onMount(() => {
      if (initialExpanded) {
        // Only expand the root node
        store.toggleNode(data.name);
      }
    });
  </script>
  
  {#if error}
  <div class="text-red-500 text-center p-4">
    Error loading organization chart: {error?.message || 'Unknown error'}
  </div>
  {:else}
    <div class={cn("w-full", className)}>
      <div class="flex justify-center">
        <OrgNodeRenderer
          node={data}
          isNodeExpanded={store.isNodeExpanded}
          toggleNode={store.toggleNode}
          {isLoading}
        />
      </div>
    </div>
  {/if}
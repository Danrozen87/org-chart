<script lang="ts">
  import { cn } from '/workspaces/org-chart/src/lib/utils';

  export let type: 'vertical' | 'horizontal';
  export let className: string | undefined = undefined;
  export let style: string | undefined = undefined;
</script>

<div 
  class={cn(
    "bg-org-connector-line transition-all duration-200",
    type === "vertical" 
      ? "w-[1px] origin-top animate-line-grow-vertical"
      : "h-[1px] origin-center animate-line-grow-horizontal",
    className
  )}
  {style}
  role="presentation"
  aria-hidden="true"
/>
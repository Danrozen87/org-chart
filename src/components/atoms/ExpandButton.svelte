<script lang="ts">
    import { cn } from '/workspaces/org-chart/src/lib/utils';
    import { ChevronDown } from 'lucide-svelte';
  
    export let expanded = false;
    export let disabled = false;
    export let className = '';
  
    function handleClick() {
      if (!disabled) {
        dispatch('click');
      }
    }
  
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    $: buttonClasses = cn(
      "rounded-full p-1.5 transition-all duration-300",
      "hover:bg-accent/80 active:bg-accent/60",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      expanded && "rotate-180",
      className
    );
  </script>
  
  <button
    on:click={handleClick}
    {disabled}
    class={buttonClasses}
    aria-expanded={expanded}
    aria-label={expanded ? "Collapse section" : "Expand section"}
  >
    <ChevronDown class="h-4 w-4 text-muted-foreground transition-colors" />
  </button>
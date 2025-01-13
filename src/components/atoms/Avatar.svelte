<script lang="ts">
  import { cn } from '/workspaces/org-chart/src/lib/utils';
  import { UserRound } from 'lucide-svelte';

  export let src: string;
  export let alt: string;
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let className = '';

  let error = false;

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  function handleError() {
    error = true;
  }

  $: containerClasses = cn(
    "relative rounded-full overflow-hidden",
    "bg-muted flex items-center justify-center",
    "transition-all duration-200 ease-in-out",
    sizeClasses[size],
    className
  );
</script>

<div class={containerClasses}>
  {#if !error && src}
    <img
      {src}
      {alt}
      class="w-full h-full object-cover"
      on:error={handleError}
    />
  {:else}
    <UserRound 
      size={iconSizes[size]} 
      class="text-muted-foreground"
    />
  {/if}
</div>
<script lang="ts">
    import { cn } from '/workspaces/org-chart/src/lib/utils';
    import type { OrgCardProps } from './types';
    import CardHeader from './CardHeader.svelte';
    import CardContent from './CardContent.svelte';
    import CardFooter from './CardFooter.svelte';
    
    export let name: string;
    export let head: string;
    export let role: string | undefined = undefined;
    export let location: string | undefined = undefined;
    export let headImageUrl: string | undefined = undefined;
    export let children: OrgCardProps[] = [];
    export let isExpanded = false;
    export let hasChildren = false;
    export let className: string | undefined = undefined;
    export let isLoading = false;
    export const depth = 0; // Changed to export const since it's not being modified
    
    // Calculate actual team count based on direct children
    $: actualTeamCount = children.length;
  </script>
  
  <div 
    class={cn(
      "w-[280px] bg-white dark:bg-gray-800",
      "rounded-lg border border-gray-200 dark:border-gray-700",
      "p-4 space-y-3",
      "shadow-sm hover:shadow-md",
      "transition-all duration-200 ease-in-out",
      isLoading && "animate-pulse",
      className
    )}
  >
    <CardHeader {name} {role} />
    
    <CardContent 
      {head}
      {headImageUrl}
      {location}
    />
  
    <div class="min-h-[28px]"> <!-- Added wrapper with minimum height -->
      <CardFooter 
        teamCount={actualTeamCount}
        {isExpanded}
        {hasChildren}
        {isLoading}
        on:click
      />
    </div>
  </div>
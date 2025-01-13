<script lang="ts">
  import { cn } from '/workspaces/org-chart/src/lib/utils';
  import { onMount } from 'svelte';
  import OrgCard from '../molecules/org-card/OrgCard.svelte';
  import type { OrgNode } from '@/types/org-types';
  import type { OrgCardProps } from '@/components/molecules/org-card/types';
  import OrgConnector from '/workspaces/org-chart/src/components/molecules/OrgConnector.svelte';

  export let node: OrgNode;
  export let level = 0;
  export let isNodeExpanded: (name: string) => boolean;
  export let toggleNode: (name: string) => void;
  export let isLoading = false;

  let isMobile = false;
  let expanded = isNodeExpanded(node.name);
  $: hasChildren = node.children?.length > 0;
  
  const CARD_WIDTH = isMobile ? 240 : 280;
  const HORIZONTAL_GAP = isMobile ? 40 : 80;

  function transformToOrgCardProps(node: OrgNode): OrgCardProps {
    return {
      name: node.name,
      head: node.head,
      role: node.role,
      location: node.location,
      headImageUrl: node.headImageUrl,
      employeeCount: node.employees,
      teamCount: node.teams,
      isExpanded: isNodeExpanded(node.name),
      hasChildren: node.children?.length > 0,
      onToggleExpand: () => toggleNode(node.name),
      children: node.children?.map(transformToOrgCardProps) || []
    };
  }

  $: transformedChildren = node.children?.map(transformToOrgCardProps) || [];

  $: connectorWidth = `${(node.children?.length - 1) * (CARD_WIDTH + HORIZONTAL_GAP)}px`;
  $: gridTemplateStyle = `repeat(${node.children?.length}, ${CARD_WIDTH}px)`;
  $: columnGapStyle = `${HORIZONTAL_GAP}px`;

  function handleToggle() {
    toggleNode(node.name);
    expanded = !expanded;
  }

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

<div class="flex flex-col items-center">
  <OrgCard
    name={node.name}
    head={node.head}
    role={node.role}
    location={node.location}
    headImageUrl={node.headImageUrl}
    children={transformedChildren}
    isExpanded={expanded}
    hasChildren={hasChildren}
    on:click={handleToggle}
    depth={level}
    {isLoading}
    className={cn(
      isMobile && "w-[240px] p-3",
      "animate-org-expand"
    )}
  />

  {#if hasChildren && expanded}
    <div class="flex flex-col items-center">
      <OrgConnector
        type="vertical"
        className={cn(isMobile ? "h-6" : "h-8", "animate-line-grow-vertical")}
      />
      
      <div class="relative">
        {#if node.children?.length > 1}
          <div class="absolute top-0 left-1/2 -translate-x-1/2">
            <OrgConnector
              type="horizontal"
              className={cn("w-full", "animate-line-grow-horizontal")}
              style="width: {connectorWidth}"
            />
          </div>
        {/if}
        
        <div 
          class={cn(
            "grid",
            isMobile ? "pt-6" : "pt-8",
            "animate-org-expand"
          )}
          style="grid-template-columns: {gridTemplateStyle}; column-gap: {columnGapStyle}"
        >
          {#each node.children as child (child.name)}
            <div class="flex flex-col items-center animate-org-expand">
              <svelte:self
                node={child}
                level={level + 1}
                {isNodeExpanded}
                {toggleNode}
                {isLoading}
              />
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>
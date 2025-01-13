<script lang="ts">
    export let teamCount: number;
    export let isExpanded: boolean;
    export let hasChildren: boolean;
    export let isLoading = false;
    
    import TextElement from '../../atoms/TextElement.svelte';
    import ExpandButton from '../../atoms/ExpandButton.svelte';
  </script>
  
  <div class="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
    <div class="flex items-center gap-3">
      <TextElement variant="subtitle" className="text-xs">
        {teamCount > 0 ? `${teamCount} Teams` : 'No Teams'}
      </TextElement>
    </div>
    {#if hasChildren}
      <ExpandButton
        expanded={isExpanded}
        disabled={isLoading}
        on:click
      />
    {/if}
  </div>
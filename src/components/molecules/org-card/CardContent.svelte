<script lang="ts">
    export let head: string;
    export let headImageUrl: string | undefined = undefined;
    export let location: string | undefined = undefined;
    
    import Avatar from '../../atoms/Avatar.svelte';
    import TextElement from '../../atoms/TextElement.svelte';
    import LocationInfo from '/workspaces/org-chart/src/components/molecules/org-card/LocationInfo.svelte';
  </script>
  
  <div class="flex items-center gap-2">
    <Avatar 
      src={headImageUrl || "/placeholder.svg"}
      alt={`${head}'s avatar`}
      size="sm"
      fallback={head}
    />
    <div class="min-w-0 flex-1">
      <TextElement 
        variant="title" 
        className="text-xs sm:text-sm"
        truncate={true}
      >
        {head}
      </TextElement>
    </div>
  </div>
  
  {#if location}
    <LocationInfo {location} />
  {/if}
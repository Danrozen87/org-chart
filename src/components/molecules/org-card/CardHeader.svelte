<script lang="ts">
    export let name: string;
    export let role: string | undefined = undefined;
    import TextElement from '../../atoms/TextElement.svelte';
  </script>
  
  <div class="space-y-0.5">
    <TextElement 
      variant="title" 
      className="text-sm font-semibold block max-w-full"
      truncate={true}
    >
      {name}
    </TextElement>
    
    {#if role}
      <TextElement 
        variant="subtitle" 
        className="text-xs text-gray-500 block max-w-[200px] sm:max-w-[220px]"
        truncate={true}
      >
        {role}
      </TextElement>
    {/if}
  </div>
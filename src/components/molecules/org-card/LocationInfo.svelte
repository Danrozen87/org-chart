<script lang="ts">
    export let location: string;
    import { MapPin } from 'lucide-svelte';
    import TextElement from '../../atoms/TextElement.svelte';
  </script>
  
  <div class="flex items-center gap-1.5 text-xs text-gray-500">
    <MapPin size={12} />
    <TextElement 
      variant="subtitle" 
      className="text-xs max-w-[180px] sm:max-w-[200px]"
      truncate={true}
    >
      {location}
    </TextElement>
  </div>
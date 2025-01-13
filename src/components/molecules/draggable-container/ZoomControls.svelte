<script lang="ts">
  import Button from "/workspaces/org-chart/src/lib/ui/Button.svelte";
  import { Plus, Minus, RotateCcw } from "lucide-svelte";
  import { cn } from "/workspaces/org-chart/src/lib/utils";

  export let onZoomIn: () => void;
  export let onZoomOut: () => void;
  export let onReset: () => void;
  export let className = "";
</script>

<div class={cn("flex gap-2", className)}>
  <Button
    variant="secondary"
    size="icon"
    on:click={onZoomIn}
    class="rounded-full shadow-lg"
  >
    <Plus class="h-4 w-4" />
  </Button>
  <Button
    variant="secondary"
    size="icon"
    on:click={onZoomOut}
    class="rounded-full shadow-lg"
  >
    <Minus class="h-4 w-4" />
  </Button>
  <Button
    variant="secondary"
    size="icon"
    on:click={onReset}
    class="rounded-full shadow-lg"
  >
    <RotateCcw class="h-4 w-4" />
  </Button>
</div>
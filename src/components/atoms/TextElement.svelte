<script lang="ts">
    import { cn } from '../../lib/utils';
  
    export let variant: 'title' | 'subtitle' | 'count' = 'title';
    export let truncate = false;
    export let className = '';
  
    const variantStyles = {
      title: "text-foreground font-medium",
      subtitle: "text-muted-foreground font-normal",
      count: "text-muted-foreground/80 font-medium"
    };
  
    $: baseStyles = cn(
      "transition-colors duration-200",
      truncate && "truncate",
      className
    );
  
    $: finalStyles = cn(baseStyles, variantStyles[variant]);
  </script>
  
  <span class={finalStyles}>
    <slot />
  </span>
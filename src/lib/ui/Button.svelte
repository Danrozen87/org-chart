<script lang="ts">
    import { cn } from '/workspaces/org-chart/src/lib/utils'
    
    export let variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" = "default";
    export let size: "default" | "sm" | "lg" | "icon" = "default";
    export let className = "";
    
    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "underline-offset-4 hover:underline text-primary"
    };
  
    const sizeStyles = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
      icon: "h-10 w-10"
    };
  
    $: buttonClass = cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      className
    );
  </script>
  
  <button
    class={buttonClass}
    on:click
    {...$$restProps}
  >
    <slot />
  </button>
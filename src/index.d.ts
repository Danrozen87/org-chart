/// <reference types="svelte" />
declare module "*.svelte" {
    import type { ComponentType } from "svelte";
    const component: ComponentType;
    export default component;
  }
  declare module "*.svg" {
    const content: string;
    export default content;
  }
  declare module "*.png" {
    const content: string;
    export default content;
  }
  declare module "*.jpg" {
    const content: string;
    export default content;
  }
  // Add support for importing CSS modules
  declare module "*.css" {
    const content: Record<string, string>;
    export default content;
  }
  // Add support for importing JSON
  declare module "*.json" {
    const value: any;
    export default value;
  }
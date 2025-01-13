// Base node structure that will work well in both React and Svelte
export interface OrgNode {
  name: string;
  head: string;
  headImageUrl?: string;
  role?: string;
  location?: string;
  employees: number;
  teams: number;
  children: OrgNode[];
}

// Enhanced type for expanded nodes state
export interface ExpandedNodes {
  [key: string]: boolean;
}

// Type guard for OrgNode (will help in both React and Svelte)
export function isOrgNode(node: unknown): node is OrgNode {
  return (
    typeof node === 'object' &&
    node !== null &&
    'name' in node &&
    'head' in node &&
    'employees' in node &&
    'teams' in node &&
    'children' in node &&
    Array.isArray((node as OrgNode).children)
  );
}

// Props interface that works with Svelte's prop system
export interface OrgChartConfig {
  initialExpanded: boolean;
  className?: string;
}

export interface OrgChartProps extends OrgChartConfig {
  data: OrgNode;
}

// Event handler types that work in both frameworks
export type ToggleHandler = (nodeName: string) => void;
export type ErrorHandler = (error: Error) => void;
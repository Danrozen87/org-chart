import { writable } from 'svelte/store';
import type { OrgNode, ExpandedNodes } from '../types/org-types';

function createOrgChartStore(initialExpanded: boolean = false) {
  // Create the base writable store for expanded nodes
  const { subscribe, set, update } = writable<ExpandedNodes>({});

  // Initialize store if needed
  if (initialExpanded) {
    set({});
  }

  return {
    subscribe,
    toggleNode: (nodeName: string) => {
      update(nodes => {
        const newNodes = { ...nodes };
        newNodes[nodeName] = !newNodes[nodeName];
        console.log(`Toggled node ${nodeName}, new state:`, newNodes[nodeName]);
        return newNodes;
      });
    },
    isNodeExpanded: (nodeName: string) => {
      let result = false;
      subscribe(nodes => {
        result = !!nodes[nodeName];
      })();
      return result;
    },
    expandAll: (rootNode: OrgNode) => {
      const expanded: ExpandedNodes = {};
      const traverse = (node: OrgNode) => {
        expanded[node.name] = true;
        node.children?.forEach(traverse);
      };
      traverse(rootNode);
      set(expanded);
      console.log('Expanded all nodes');
    },
    collapseAll: () => {
      set({});
      console.log('Collapsed all nodes');
    }
  };
}

// Create a singleton instance
let store: ReturnType<typeof createOrgChartStore>;

// Helper function for Svelte components
export function getOrgChartStore(initialExpanded: boolean = false) {
  if (!store) {
    store = createOrgChartStore(initialExpanded);
  }
  return store;
}
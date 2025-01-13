<script lang="ts">
  import OrgChart from './components/organisms/OrgChart.svelte';
  import DraggableContainer from './components/molecules/draggable-container/DraggableContainer.svelte';
  import type { OrgNode } from './types/org-types';
  
  // Sample data matching React implementation
  const sampleData: OrgNode = {
    name: "C Level",
    head: "Ulf Bokelund Svensson",
    role: "CEO",
    location: "Näsviken",
    headImageUrl: "/placeholder.svg",
    employees: 4,
    teams: 0,
    children: [
      {
        name: "Commercial",
        head: "Malin Svanberg",
        role: "CCO",
        location: "Göteborg",
        headImageUrl: "/placeholder.svg",
        employees: 0,
        teams: 0,
        children: []
      },
      {
        name: "Development and IT",
        head: "Henry Arousell",
        role: "CTO",
        location: "Näsviken",
        headImageUrl: "/placeholder.svg",
        employees: 0,
        teams: 0,
        children: [
          {
            name: "Group IT and IT Services",
            head: "Robert Dahlin",
            role: "Head of IT",
            location: "Stockholm",
            headImageUrl: "/placeholder.svg",
            employees: 10,
            teams: 0,
            children: []
          },
          {
            name: "Group Development",
            head: "Henry Arousell",
            role: "Head of Development",
            location: "Näsviken",
            headImageUrl: "/placeholder.svg",
            employees: 0,
            teams: 0,
            children: []
          }
        ]
      },
      {
        name: "Finance and HR",
        head: "Mikael Andersson",
        role: "CFO",
        location: "Näsviken",
        headImageUrl: "/placeholder.svg",
        employees: 0,
        teams: 0,
        children: []
      },
      {
        name: "Program Support, Knowledge and Legal",
        head: "Ulf Bokelund Svensson",
        role: "Head of Legal",
        location: "Näsviken",
        headImageUrl: "/placeholder.svg",
        employees: 0,
        teams: 0,
        children: [
          {
            name: "Group Program Support",
            head: "Erwin Louwman",
            role: "Head of Program Support",
            location: "Roskilde",
            headImageUrl: "/placeholder.svg",
            employees: 1,
            teams: 0,
            children: []
          },
          {
            name: "Group Knowledge and Legal",
            head: "Ulf Bokelund Svensson",
            role: "Head of Legal",
            location: "Näsviken",
            headImageUrl: "/placeholder.svg",
            employees: 0,
            teams: 0,
            children: []
          }
        ]
      }
    ]
  };
  </script>
  
  <div class="min-h-screen bg-background overflow-hidden">
    <div class="h-screen p-4 overflow-hidden">
      <div class="h-full overflow-hidden">
        <DraggableContainer>
          <OrgChart data={sampleData} initialExpanded={true} />
        </DraggableContainer>
      </div>
    </div>
  </div>
  
  <style>
    :global(*) {
      scrollbar-width: none;  /* Firefox */
      -ms-overflow-style: none;  /* IE and Edge */
    }
    
    :global(*::-webkit-scrollbar) {
      display: none; /* Chrome, Safari and Opera */
    }
  </style>
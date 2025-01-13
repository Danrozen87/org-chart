export interface OrgCardProps {
    name: string;
    head: string;
    role?: string;
    location?: string;
    headImageUrl?: string;
    employeeCount: number;
    teamCount: number;
    isExpanded: boolean;
    hasChildren: boolean;
    onToggleExpand: () => void;
    className?: string;
    isLoading?: boolean;
    depth?: number;
    children?: OrgCardProps[];
  }
import { MenuGroup } from "@/types/menu";
import {
  menuItems,
  hrMenuItems,
  posMenuItems,
  claimItems,
  assetItems,
  financeItems,
  programmesItems,
  reportItems,
  workflowItems,
  memberManagementItems,
  serviceModuleItems,
  communityItems,
  financialItems,
  complianceItems,
} from "@/components/layout/sidebar/menu-items";

export const menuGroups: MenuGroup[] = [
  {
    label: "Admin Console",
    route: "/admin",
    items: menuItems,
  },
  {
    label: "Member Management",
    route: "/member",
    items: memberManagementItems,
  },
  {
    label: "Service Module",
    route: "/services",
    items: serviceModuleItems,
  },
  {
    label: "Community",
    route: "/community",
    items: communityItems,
  },
  {
    label: "Financial",
    route: "/fincancial",
    items: financialItems,
  },
  {
    label: "HR Management",
    route: "/hr",
    items: hrMenuItems,
  },
  {
    label: "POS Management",
    route: "/pos",
    items: posMenuItems,
  },
  {
    label: "Claim Management",
    route: "/claim",
    items: claimItems,
  },
  {
    label: "Asset Management",
    route: "/asset",
    items: assetItems,
  },
  {
    label: "Finance Management",
    route: "/finance",
    items: financeItems,
  },
  {
    label: "Programmes Management",
    route: "/programmes",
    items: programmesItems,
  },
  {
    label: "Report Management",
    route: "/report",
    items: reportItems,
  },
  {
    label: "Workflow Management",
    route: "/workflow",
    items: workflowItems,
  },
  {
    label: "Compliance",
    route: "/compliance",
    items: complianceItems,
  },
];
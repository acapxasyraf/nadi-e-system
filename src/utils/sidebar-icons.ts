import {
  LayoutDashboard,
  Users,
  Settings,
  MessageSquare,
  Wallet,
  FileCheck,
  Briefcase,
  ShoppingCart,
  Box,
  DollarSign,
  List,
  ChartBar,
  LucideIcon,
  Building2,
} from "lucide-react";

export const getAccordionIcon = (label: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    "Admin Console": LayoutDashboard,
    "Member Management": Users,
    "Service Module": Settings,
    Community: MessageSquare,
    Financial: Wallet,
    Compliance: FileCheck,
    "HR Management": Briefcase,
    "POS Management": ShoppingCart,
    "Asset Management": Box,
    "Finance Management": DollarSign,
    "Programmes Management": List,
    "Report Management": ChartBar,
    "Site Management": Building2,
  };
  return iconMap[label] || LayoutDashboard;
};

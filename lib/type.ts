export type SidebarItemProps = {
  
    href: string;
    Icon: React.ComponentType;
    text: string;
  };
  
  export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
  };
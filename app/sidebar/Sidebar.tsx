"use client";

import {
  HomeIcon,
  Wallet,
  FileTextIcon,
  FilePlus,
  CreditCard,
  BadgeDollarSign,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import Image from "next/image";
import { SidebarItemProps } from "../../lib/type";

const sidebarData = [
  {
    id: "dashboard",
    href: "/",
    icon: HomeIcon,
    text: "Dashboard",
  },
  {
    id: "wallet",
    href: "/wallet",
    icon: Wallet,
    text: "Wallet",
  },
  {
    id: "invoices",
    href: "/invoices",
    icon: FileTextIcon,
    text: "Invoices",
  },
  {
    id: "createInvoices",
    href: "/create-invoice",
    icon: FilePlus,
    text: "Create Invoice",
  },
  {
    id: "card",
    href: "/card",
    icon: CreditCard,
    text: "Card",
  },
  {
    id: "transaction",
    href: "/transaction",
    icon: BadgeDollarSign,
    text: "Transaction",
  },
  {
    id: "clients",
    href: "/clients",
    icon: Users,
    text: "Clients",
  },
];

export default function Sidebar() {
  return (
    <div className='fixed h-screen bg-card'>
      <div className='flex items-center px-12 py-12 mb-12 space-x-3 items-'>
        <Image src='/logo.svg' alt='logo' width={32} height={32} />
        <h1 className='text-3xl'>Billpay</h1>
      </div>
      <div className=''>
        {sidebarData.map((item) => (
          <SidebarItem
            key={item.id}
            href={item.href}
            Icon={item.icon}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

const SidebarItem = ({ href, Icon, text }: SidebarItemProps) => {
  const activePath = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "flex gap-8 px-12 mb-10 text-muted-foreground hover:text-primary transition-colors ",
        {
          [activePath === href
            ? "text-primary"
            : "text-muted-foreground"]: activePath === href,
        }
      )}
    >
      <Icon />
      <p>{text}</p>
    </Link>
  );
};

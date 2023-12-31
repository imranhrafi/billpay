import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BillPay tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${nunito.className} flex h-full bg-background lg:max-w-[1920px] lg:mx-auto overflow-x-hidden`}
      >
        <aside className='overflow-x-hidden  hidden w-[260px] h-screen text-sm font-bold  lg:block  z-10'>
          <Sidebar />
        </aside>

        <div className='flex flex-col flex-1 ml-auto '>
          <nav className='mt-2 ml-12 md:mt-6'>
            <Navbar />
          </nav>
          <main className='h-screen mt-12'>{children}</main>
        </div>
      </body>
    </html>
  );
}

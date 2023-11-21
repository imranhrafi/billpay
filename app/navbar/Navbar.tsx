import { Bell, MessageSquare, Search, Settings } from "lucide-react";
import { Input } from "../../components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className='flex items-center text-muted-foreground '>
      <Image
        src='/logo.svg'
        alt='logo'
        width={32}
        height={32}
        className='block ml-auto mr-10 lg:hidden'
      />

      <div className='relative flex-1 hidden w-full md:block'>
        <Input
          className='pl-10 border-0 rounded-full md:h-10 lg:h-16 bg-card'
          placeholder='Search'
        />
        <Search
          className='absolute transform -translate-y-1/2 pointer-events-none left-3 top-1/2 text-muted-foreground'
          size={20}
        />
      </div>

      <div className='flex items-center justify-end flex-1 gap-10'>
        <div className='hidden md:flex md:gap-5 lg:gap-10'>
          <Button variant={"ghost"} size={"icon"}>
            <Bell tabIndex={0} />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <MessageSquare tabIndex={0} />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <Settings tabIndex={0} />
          </Button>
        </div>

        <Button
          className='flex h-16 hover:bg-transparent hover:text-primary'
          tabIndex={0}
          variant={"ghost"}
        >
          <div className='flex flex-col'>
            <p className='font-bold text-foreground text-[18px]'>
              Tony Soap
            </p>
            <span className='text-muted-foreground'>Admin</span>
          </div>
          <Avatar className='ml-8 h-14 w-14'>
            <AvatarImage src='https://github.com/shadcn.png' />

            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </div>
  );
}

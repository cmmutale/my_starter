import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AppConfig } from "@/config/AppConfig"
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'
import Logo from "../Logo"

function AppDrawer() {
    return (
        <Sheet>
            <SheetTrigger>
                <HamburgerMenuIcon />
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                </SheetHeader>
                <div>
                    <ul>
                        {
                            AppConfig.MainMenu.map((item, index) => {
                                return (
                                    <li
                                        key={index}>
                                        <a
                                            className="hover:bg-accent py-1 px-2 rounded-lg 
                                            block w-full text-sm text-accent-foreground
                                            font-semibold"
                                            href={item.url}>
                                            <span></span>
                                            <span>
                                                {item.title}
                                            </span>
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default AppDrawer
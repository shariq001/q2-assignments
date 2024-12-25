import { faMagnifyingGlass, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from 'next/image'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    
  } from "@/components/ui/navigation-menu"
  

const Header = () => {
  return (
    <div className='bg-[#0e0b30] text-white px-[200px] py-[5px]'>
        <div className='flex justify-between items-center w-full border-[#302F2E] border-b-[1px] pb-[10px]'>
            <h3><FontAwesomeIcon icon={faMobileScreen} className='size-[20px] text-red-500 inline-flex items-end' /> Download App via SMS</h3>
            <div className='flex justify-center gap-[5px] items-center'>
                <p className='text-red-500 border-grey-100 border-r-[1px] px-[10px]'>Urdu</p>
                <hr />
                <p className='border-grey-100 border-r-[1px] px-[10px]'>Sign Up</p>
                <hr />
                <p>Sign In</p>
            </div>
        </div>

        <div className='flex justify-between items-center w-full pt-[10px]'>
            <Image src='/images/logo.svg' width={160} height={50} alt='Logo' />
            <nav className='flex justify-center gap-[10px]'>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='text-white bg-transparent'>Used Cars</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink className='m-[200px]'><FontAwesomeIcon icon={faMagnifyingGlass} className='size-[15px] inline-flex' />Find Used Cars for Sale</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='text-white bg-transparent'>Used Cars</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink className='m-[200px]'><FontAwesomeIcon icon={faMagnifyingGlass} className='size-[15px] inline-flex' />Find Used Cars for Sale</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='text-white bg-transparent'>Used Cars</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink className='m-[200px]'><FontAwesomeIcon icon={faMagnifyingGlass} className='size-[15px] inline-flex' />Find Used Cars for Sale</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='text-white bg-transparent'>Used Cars</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink className='m-[200px]'><FontAwesomeIcon icon={faMagnifyingGlass} className='size-[15px] inline-flex' />Find Used Cars for Sale</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            </nav>
        </div>
    </div>
  )
}

export default Header
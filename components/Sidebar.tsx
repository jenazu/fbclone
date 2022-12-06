import { useSession } from 'next-auth/client'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import SidebarRow from './SidebarRow';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
    const [session, loading] = useSession()
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:max-w-[300px]'>
        <SidebarRow src={session?.user?.image} title={ session?.user?.name!}/> 
        <SidebarRow Icon={GroupIcon} title='Friends'/> 
        <SidebarRow Icon={GroupsOutlinedIcon} title='Groups'/> 
        <SidebarRow Icon={ShoppingBasketOutlinedIcon} title='Marketplace'/> 
        <SidebarRow Icon={DesktopWindowsOutlinedIcon} title='Watch'/> 
        <SidebarRow Icon={CakeOutlinedIcon} title='Events'/> 
        <SidebarRow Icon={WatchLaterIcon} title='Memories'/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title='See More'/>
    </div>
  )
}

export default Sidebar
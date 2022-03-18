import Image from 'next/image';
import React from 'react'
import logo from '../public/logo.png'
import SidebarLink from './SidebarLink';
import {HomeIcon} from "@heroicons/react/solid";  
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[320px] p-2 fixed h-full">
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
          <Image src={logo} width={30} height={30}/>
        </div>
        <div className="space-y-2.5 mb-2.5 xl:ml-24">
          <SidebarLink text="Home" Icon={HomeIcon} active/>
          <SidebarLink text="Explore" Icon={HashtagIcon} active={false}/>
          <SidebarLink text="Notifications" Icon={BellIcon} active={false}/>
          <SidebarLink text="Messages" Icon={InboxIcon} active={false}/>
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon} active={false}/>
          <SidebarLink text="Lists" Icon={ClipboardIcon} active={false}/>
          <SidebarLink text="Profile" Icon={UserIcon} active={false}/>
          <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} active={false}/>
        </div>
        <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">Tweet</button>
        <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
          <img src="https://i.pcmag.com/imagery/reviews/03aizylUVApdyLAIku1AvRV-39.fit_scale.size_1028x578.v1605559903.png" alt="" className="h-10 w-10 rounded-full xl:mr-2.5"/>
          <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">Adetunji Adyinka</h4>
            <p className="text-[#6e767d]">@itzadetunji</p>
          </div>
          <DotsCircleHorizontalIcon className="h-5 hidden xl:inline ml-10"/>
        </div>
    </div>
  )
}

export default Sidebar;
import Image from "next/image";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderIcon from "./HeaderIcon";
import HomeIcon from "@mui/icons-material/Home";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import GridViewIcon from '@mui/icons-material/GridView';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png"
          width={40}
          height={40}
          alt=""
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 w-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="ml-2 items-center bg-transparent outline-none placeholder-gray-500
            flex-shrink hidden md:inline-flex"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon active={false} Icon={TourOutlinedIcon} />
          <HeaderIcon active={false} Icon={PlayCircleOutlineOutlinedIcon} />
          <HeaderIcon active={false} Icon={ShoppingCartOutlinedIcon} />
          <HeaderIcon active={false} Icon={GroupsOutlinedIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="font-semibold whitespace-nowrap pr-3">Pham Nghia</p>
        <GridViewIcon className="icon"/>
        <SmsIcon className="icon"/>
        <NotificationsIcon className="icon"/>
        <KeyboardArrowDownIcon className="icon"/>
      </div>
    </div>
  );
}

export default Header;

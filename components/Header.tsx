import Image from "next/image";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div>
      <h1>hello</h1>

      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png"
          width={40}
          height={40}
          alt=""
        />
        <div className="flex">
        <SearchIcon className="h-36 w-36"/>
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Center */}

      {/* Right */}
    </div>
  );
}

export default Header;

import Image from "next/image";
import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

interface Props {
  name: string;
  message: string;
  email: string;
  timestamp: any;
  image: string;
  postImage: string;
}

function Post({ name, message, email, timestamp, image, postImage }: Props) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            className="rounded-full"
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (

            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toDateString()}
            </p>
            ):(
              <p className="text-xs text-gray-400">Loading...</p>
            )}
          </div>
        </div>
        <p className="pt-4 ">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      {/* Footer of post */}
      <div
        className="flex justify-between items-center rounded-b-2xl
      bg-white shadow-md text-gray-400 border-t"
      >
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpOutlinedIcon className="h-4" />
          <p className="text-xs sm:text-base ">Like</p>
        </div>
        <div className="inputIcon rounded-none">
        <ChatBubbleOutlineOutlinedIcon className="h-4" />
          <p className="text-xs sm:text-base ">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
        <ShareOutlinedIcon className="h-4" />
          <p className="text-xs sm:text-base ">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;

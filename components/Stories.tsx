import React from "react";
import StoryCard from "./StoryCard";

export const stories = [
  {
    name: "nam",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "elon",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "jeff",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "mark",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "bull",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div
      className="flex justify-center space-x-3 mx-auto"
    >
      {stories.map((story,index) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} key={index}/>
      ))}
    </div>
  );
}

export default Stories;

import { Avatar } from "@/ui/Avatar";
import React from "react";

const Author = ({ avatarUrl, name }) => {
  console.log(avatarUrl);
  return (
    <div className="flex items-center gap-2">
      <Avatar src={avatarUrl} width={24} />
      <p className="text-sm font-medium text-secondary-600">{name}</p>
    </div>
  );
};

export default Author;

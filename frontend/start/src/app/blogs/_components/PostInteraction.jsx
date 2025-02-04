import { toPersianNumbers } from "@/hooks/convertNumber";
import ButtonIcon from "@/ui/ButtonIcon";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const PostInteraction = ({ post }) => {
  return (
    <div className="flex  items-center gap-x-2 mt-2">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        {toPersianNumbers(post.commentsCount)}
      </ButtonIcon>
      <ButtonIcon variant="red">
        <HeartIcon />
        {toPersianNumbers(post.likesCount)}
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
};

export default PostInteraction;

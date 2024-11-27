import axios from "axios";

import CoverImage from "./CoverImage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Avatar } from "@/ui/Avatar";
import Author from "./Author";
import PostInteraction from "./PostInteraction";

async function PostsList() {
  // await new Promise((res) => setTimeout(() => res(), 3000));

  const {
    data: {
      data: { posts },
    },
  } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);

  console.log(posts);

  return posts?.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts?.map((post) => (
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg">
          <CoverImage {...post} />
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h3 className="text-lg font-bold text-secondary-700 mt-2">
                {post.title}
              </h3>
            </Link>
            <div className="flex items-center justify-between mt-2">
              <Author {...post.author} />
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-secondary-700" />
                <div>
                  <p className="text-xs text-secondary-700">
                    خواندن : {post.readingTime} دقیقه
                  </p>
                </div>
              </div>
            </div>
          </div>
          <PostInteraction />
        </div>
      ))}
    </div>
  ) : null;
}

export default PostsList;

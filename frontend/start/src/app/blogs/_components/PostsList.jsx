import axios from "axios";

import Avatar from "../../../../public/images/avatar.png";
import CoverImage from "./CoverImage";

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
        <CoverImage {...post} />
      ))}
    </div>
  ) : null;
}

export default PostsList;

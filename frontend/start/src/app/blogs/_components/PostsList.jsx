import axios from "axios";
async function PostsList() {
  await new Promise((res) => setTimeout(() => res(), 30000));

  const {
    data: {
      data: { posts },
    },
  } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);

  return posts?.length > 0 ? posts?.map((post) => <p>{post?.title}</p>) : null;
}

export default PostsList;

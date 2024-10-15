import React from "react";
import { Suspense } from "react";
import PostsList from "./_components/PostsList";
import Spinner from "@/ui/Spinner";

async function BlogPage() {
  return (
    <div>
      <p className="text-secondary-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni
        maxime eveniet consequatur officia, quidem quam distinctio cum tempora
        nostrum.
      </p>
      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
    </div>
  );
}

export default BlogPage;

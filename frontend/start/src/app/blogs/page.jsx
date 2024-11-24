import React from "react";
import { Suspense } from "react";
import PostsList from "./_components/PostsList";
import Spinner from "@/ui/Spinner";

async function BlogPage() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PostsList />
      </Suspense>
    </div>
  );
}

export default BlogPage;

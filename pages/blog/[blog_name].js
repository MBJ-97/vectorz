import React from "react";
import { useRouter } from "next/router";

const BlogName = () => {
  const router = useRouter();

  const { blog_name } = router.query;
  return (
    <div className="bg-gray-200">
      <p className="text-3xl font-bold text-red-400">Name : {blog_name}</p>
    </div>
  );
};

export default BlogName;

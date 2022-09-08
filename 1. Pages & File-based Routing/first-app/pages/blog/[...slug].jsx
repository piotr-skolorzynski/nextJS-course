import { useRouter } from 'next/router';

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router); //returns objecy with an array of path parts

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
};

export default BlogPostsPage;

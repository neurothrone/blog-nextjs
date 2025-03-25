import { posts } from "@/data/placeholder-data";
import Post from "@/ui/components/posts/Post";

export default function Page() {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => <Post key={post.id} {...post} />)}
      </ul>
    </>
  );
}

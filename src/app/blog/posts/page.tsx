import Link from "next/link"
import Post from "@/ui/components/posts/Post";
import { getPosts } from "@/database/data";
import { Button } from "@/ui/components/button";

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <Link href="/blog/posts/insert"><Button
        className="outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New
        +</Button></Link>
      <h1>Posts</h1>
      {posts?.map((post) => <Post key={post.id} {...post} />)}
    </>
  )
}

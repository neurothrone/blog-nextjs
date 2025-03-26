import Post from "@/ui/components/posts/Post";
import { connectToDB } from "@/database/data";
import posts from "@/data/placeholder-data";

export default async function Page() {
  const client = await connectToDB();

  return (
    <>
      {client && <h1 className="text-emerald-500">Connected to the database</h1>}
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => <Post key={post.id} {...post} />)}
      </ul>
    </>
  );
}

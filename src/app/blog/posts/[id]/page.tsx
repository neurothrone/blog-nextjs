import { posts } from "@/data/placeholder-data";
import Post from "@/ui/components/posts/Post";

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return <Post {...post} />;
}

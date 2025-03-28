import Post from "@/ui/components/posts/Post";
import { notFound } from "next/navigation";
import { getPosts } from "@/database/data";

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const posts = await getPosts();

  if (!posts) {
    return <h1>No posts available</h1>;
  }

  const post = posts.find((post) => post.id === id);

  if (!post) {
    // return <h1>Post not found</h1>;
    notFound();
  }

  return <Post {...post} />;
}

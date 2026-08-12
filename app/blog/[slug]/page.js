import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "../../../lib/blogPosts";
import PostView from "./PostView";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `https://myrimedicalbilling.com/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: "MYRI Medical Billing",
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return <PostView post={post} />;
}

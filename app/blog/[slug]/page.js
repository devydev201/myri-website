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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "MYRI Medical Billing",
      url: "https://myrimedicalbilling.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MYRI Medical Billing",
      logo: {
        "@type": "ImageObject",
        url: "https://myrimedicalbilling.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://myrimedicalbilling.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PostView post={post} />
    </>
  );
}

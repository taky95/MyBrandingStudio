type Post = {
  title: { rendered: string };
  content: { rendered: string };
};

async function getPostBySlug(slug: string): Promise<Post> {
  const res = await fetch(`https://yourdomain.com/wp-json/wp/v2/posts?slug=${slug}`);
  const data = await res.json();
  return data[0]; // Assuming unique slugs
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Alert from "../../components/alert";
import Container from "../../components/container";
import { PostBody } from "../../components/post-body";
import { PostHeader } from "../../components/post-header";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml((await post).content || "");

  return (
    <main>
      <Alert preview={(await post).preview} />
      <Container>
        <article className="">
          <PostHeader
            title={(await post).title}
            coverImage={(await post).coverImage}
            date={(await post).date}
            author={(await post).author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${(await post).title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    openGraph: {
      title,
      images: [(await post).ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return (await posts).map((post: { slug: any; }) => ({
    slug: post.slug,
  }));
}

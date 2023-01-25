import Head from "next/head";
import Link from "next/link";
import {getDatabase} from "../lib/notion";
import {Text} from "./blog/[id].js";
import styles from "./index.module.css";
import Logo from "../components/logo";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/logo.svg"/>
      </Head>

      <main className={styles.container}>

        <header className={styles.header}>
          <Logo width="133px" height="80px"/>
          <h1>Blog Post</h1>
          <p>
            Welcome to our website! We are excited to share my thoughts and experiences
            with you. Here on my blog, you will find a variety of topics ranging from entertainment to personal
            development and beyond. I strive to create content that is both informative and
            entertaining, and we hope that my words can inspire and empower you in some way. Thank you for visiting and
            I
            hope you enjoy your time here.
          </p>
        </header>

        <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            console.log("post", post);
            const date = new Date(post.properties.Date?.date?.start).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>

                <h3 className={styles.postTitle}>
                  <Link href={`blog/${post.properties.Slug.rich_text[0].plain_text}`}>
                    <figure>
                      <img className={styles.s6} src={post.cover?.external.url} alt={"caption"}/>
                    </figure>
                    <Text text={post.properties.Name.title}/>
                  </Link>
                </h3>

                <p className={styles.postDescription}>Posted on {date}</p>
                <Text text={post.properties.Summary.rich_text}/>
                <br/>
                <Link href={`blog/${post.properties.Slug.rich_text[0].plain_text}`}><p>Continue reading →</p></Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database.filter(post => post.properties.Published.checkbox === true),
    },
    revalidate: 1,
  };
};

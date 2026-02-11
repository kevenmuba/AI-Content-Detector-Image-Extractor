// app/page.tsx
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Home() {
  const posts = await getData();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div>
          <h1>Posts new gj gv ffcd kezS DHF:</h1>
          <p>why i said  ghh gjalways this  wef kezas ahuns </p>
          <ul>
            {posts.slice(0, 5).map((post: any) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

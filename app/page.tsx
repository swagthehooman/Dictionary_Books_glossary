import Link from "next/link";
import { kalam, judson } from "./fontConsts";
export default function Home() {
  return (
    <main className="w-full h-full">
      <img src="/images/paperCutout.jpeg" alt="background" className="fixed right-0 top-0 h-full w-[50%] -z-10" />
      <div className="fixed left-0 top-0 h-full w-[50%] grid place-content-center gap-4">
        <h2 className={`${kalam.className} text-5xl`}>Word and Books encyclopedia</h2>
        <div className={`${kalam.className} w-full flex justify-around text-2xl`}>
          <Link className="bg-slate-900 p-2 rounded-md" href={'/words'}>Search for Words</Link>
          <Link className="bg-slate-900 p-2 rounded-md" href={'/books'}>Search for Books</Link>
        </div>
      </div>
    </main>
  );
}

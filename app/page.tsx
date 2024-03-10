import Link from "next/link";
import { kalam, judson } from "./fontConsts";
export default function Home() {
  return (
    <main className="w-full h-full">
      <img src="/images/paperCutout.jpeg" alt="background" className="fixed right-0 top-0 h-full w-[50%] -z-10 max-[680px]:w-full max-[680px]:blur-[1px] max-[680px]:opacity-20" />
      <div className="fixed left-0 top-0 h-full w-[50%] p-6 grid place-content-center gap-4 max-[680px]:w-full">
        <h2 className={`${kalam.className} text-5xl text-center`}>Word and Books encyclopedia</h2>
        <div className={`${judson.className} w-full flex justify-around text-2xl gap-4 max-[680px]:flex-col max-[680px]:gap-4`}>
          <Link className="bg-slate-900 p-2 rounded-md text-center" href={'/words'}>Search for Words</Link>
          <Link className="bg-slate-900 p-2 rounded-md text-center" href={'/books'}>Search for Books</Link>
        </div>
      </div>
    </main>
  );
}

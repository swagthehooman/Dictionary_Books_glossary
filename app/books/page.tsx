'use client'

import Link from "next/link"
import { judson } from "../fontConsts"
import { ChangeEvent, useState } from "react";
import '../globalIcons.css';

export default function Books() {

    const [book, setBook] = useState<string>('');
    const [shouldFetch, setShouldFetch] = useState<boolean>(false);

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setShouldFetch(false)
        setBook(e.target.value)
    }

    const handleClick = (e: React.MouseEvent) => {
        setShouldFetch((prev: boolean) => !prev)
    }


    return <main className={`${judson.className}`}>
        <img src="/images/booksBackground.jpeg" alt="background" className="fixed left-0 top-0 w-[50%] -z-10 blur-[1px] opacity-20 max-[680px]:min-w-full max-[680px]:min-h-full" />
        <div className="flex items-center mt-4">
            <div className="">
                <Link href={'/'} className="flex items-center gap-2 text-2xl"><span className="material-symbols-outlined">arrow_back</span>Back</Link>
            </div>
            <div className="w-full flex justify-center items-center gap-4">
                <input type="text" name="wordInput" value={book} placeholder="Type a word" onChange={handleSearchInput} className="text-slate-900 text-2xl p-4 rounded-md w-[40%] h-12 text-center outline-none max-[680px]:w-[50%]" />
                <span onClick={handleClick} className="cursor-pointer material-symbols-outlined">search</span>
            </div>
        </div>
        <div className="grid place-content-center m-16 gap-12">
            <p className="text-3xl">Coming Soon!!!</p>
        </div>
    </main>

}
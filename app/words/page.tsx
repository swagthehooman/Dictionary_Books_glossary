'use client'

import { judson, kalam } from "../fontConsts";
import { ChangeEvent, useState } from "react";
import { Phonetics } from "../components/Phonetics";
import { Meanings } from "../components/Meanings";
import Link from "next/link";
import '../globalIcons.css';
// import useSWR from "swr";
import { fetchWord } from "../utils/FetchData";
import useSWRImmutable from "swr/immutable";

export default function WordPage() {

    const [word, setWord] = useState<string>('')
    const [shouldFetch, setShouldFetch] = useState<boolean>(false)
    const { data, error, isLoading } = useSWRImmutable(shouldFetch ? word : null, fetchWord);

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setShouldFetch(false)
        setWord(e.target.value)
    }

    //write logic for fetching data from api
    //set conditions for dynamic conditional render of dom.

    const handleClick = (e: React.MouseEvent) => {
        setShouldFetch((prev: boolean) => !prev)
    }

    return (<main className={`${judson.className}`}>
        <img src="/images/newspaperBackground.jpeg" alt="background" className="fixed -left-40 -top-40 w-[50%] rotate-45 -z-10 blur-[1px] opacity-30" />
        <div className="absolute">
            <Link href={'/'} className="flex items-center gap-2"><span className="material-symbols-outlined">arrow_back</span>Back</Link>
        </div>
        <div className="w-full flex justify-center items-center gap-4 mt-4">
            <input type="text" name="wordInput" value={word} placeholder="Type a word" onChange={handleSearchInput} className="text-slate-900 text-2xl p-4 rounded-md w-[40%] h-12 text-center outline-none" />
            <span onClick={handleClick} className="cursor-pointer material-symbols-outlined">search</span>
        </div>

        {isLoading && <p className="absolute top-0 -z-10 flex justify-center items-center h-screen w-full text-2xl">Loading</p>}

        {error && <p className="absolute top-0 -z-10 flex justify-center items-center h-screen w-full text-2xl">Error!! Word doesn't exist or api error</p>}

        {word === '' && <p className="absolute top-0 -z-10 flex justify-center items-center h-screen w-full text-2xl">Type to get a word meaning</p>}

        {word !== '' && data && <div className="grid grid-cols-2 m-16 gap-12">
            <div className="text-xl">
                <h3 className="text-4xl"><span className={`${kalam.className} mr-2`}>Word:</span> {data[0].word}</h3>
                <p>Meanings</p>
                <ol>
                    <li>
                        {data[0].meanings.map((meaning: Meanings, index: number) => <div className="flex mb-8">
                            <>{index + 1})</>
                            <Meanings key={index} meaning={meaning} />
                        </div>)}
                    </li>
                </ol>
            </div>
            <div className="text-xl">
                <h3 className="text-4xl"><span className={`${kalam.className}`}>Phonetic:</span> "/əˈl(j)ʊɚ/"</h3>
                <p>Phonetics: </p>
                {data[0].phonetics.map((phonetic: Phonetics, index: number) => <div className="flex mb-8">
                    <>{index + 1})</>
                    <Phonetics key={index} phonetic={phonetic} />
                </div>
                )}
            </div>
        </div>}
    </main>);
}
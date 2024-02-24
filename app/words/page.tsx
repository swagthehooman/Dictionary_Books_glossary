'use client'

import { judson, kalam } from "../fontConsts";
import { ChangeEvent, ReactEventHandler, useEffect, useState } from "react";
import { Phonetics } from "../components/Phonetics";
import { Meanings } from "../components/Meanings";
import Link from "next/link";

export default function WordPage() {

    const [word, setWord] = useState<string>('')

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value)

    }

    // useEffect(() => console.log(word), [word])

    //write logic for fetching data from api
    //set conditions for dynamic conditional render of dom.

    return (<main className={`${judson.className}`}>
        <img src="/images/newspaperBackground.jpeg" alt="background" className="fixed -left-40 -top-40 w-[50%] rotate-45 -z-10 blur-[1px] opacity-30" />
        <div className="absolute">
            <Link href={'/'}>Back</Link>
        </div>
        <div className="w-full flex justify-center mt-4">
            <input type="text" name="wordInput" value={word} placeholder="Type a word" onChange={handleSearchInput} className="text-slate-900 text-2xl p-4 rounded-md w-[40%] h-12 text-center outline-none" />
        </div>
        <div className="grid grid-cols-2 m-16 gap-12">
            <div className="text-xl">
                <h3 className="text-4xl"><span className={`${kalam.className} mr-2`}>Word:</span> Allure</h3>
                <p>Meanings</p>
                <ul>
                    <li>
                        <Meanings meaning={
                            {
                                definitions: [
                                    {
                                        definition: 'The power to attract, entice; the quality causing attraction.',
                                        antonyms: [],
                                        synonyms: [],
                                    }, {
                                        definition: 'Gait; bearing',
                                        antonyms: [],
                                        synonyms: [],
                                    }
                                ], antonyms: [],
                                synonyms: [],
                                partofspeech: 'noun'
                            }
                        } />
                        <Meanings meaning={
                            {
                                definitions: [
                                    {
                                        definition: 'To entice; to attract.',
                                        antonyms: [],
                                        synonyms: [],
                                    }
                                ], antonyms: [],
                                synonyms: [
                                    "attract",
                                    "decoy",
                                    "entice",
                                    "seduce",
                                    "tempt"],
                                partofspeech: 'verb'
                            }
                        } />
                    </li>

                </ul>

            </div>
            <div className="text-xl">
                <h3 className="text-4xl"><span className={`${kalam.className}`}>Phonetic:</span> "/əˈl(j)ʊɚ/"</h3>
                <p>Phonetics: </p>
                <Phonetics phonetic={[
                    { audio: '', text: '/əˈl(j)ʊɚ/' }
                ]} />
            </div>
        </div>
    </main>);
}
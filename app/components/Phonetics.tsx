'use client';
import Link from "next/link";

export function Phonetics({ phonetic }: { phonetic: Phonetics }) {
    return <ul>
        <li>&nbsp; &nbsp;Text: {phonetic.text}</li>
        {phonetic.audio !== '' && <li>&nbsp; &nbsp; Audio: <Link href={phonetic.audio}>{phonetic.audio}</Link></li>}
    </ul>
}

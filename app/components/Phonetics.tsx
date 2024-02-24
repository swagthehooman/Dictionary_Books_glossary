'use client';
import Link from "next/link";

export function Phonetics({ phonetic }: { phonetic: Phonetics[]; }) {
    return phonetic.map((i: Phonetics) => <ul>
        <li>Text: {i.text}</li>
        {i.audio !== '' && <li>Audio: <Link href={i.audio}>{i.audio}</Link></li>}
    </ul>);
}

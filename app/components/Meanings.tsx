'use client';

import { kalam } from "../fontConsts";

export function Meanings({ meaning }: { meaning: Meanings; }) {
    return <ul>
        <li>&ensp; &ensp;<span className={`${kalam.className}`}>Part of speech: </span>{meaning.partOfSpeech}</li>
        <li>&ensp; &ensp;<span className={`${kalam.className}`}>Definitions:</span>
            {meaning.definitions.map((definition: Definitions, index: number) => {
                return <ul key={index}>
                    <li>&ensp; &ensp;&ensp; &ensp; &ensp;{index + 1}) <span className={`${kalam.className}`}>definition</span>: {definition.definition}.</li>
                    {definition.example && <li>&ensp; &ensp;&ensp; &ensp; &ensp; &ensp;<span className={`${kalam.className}`}>example: </span>{definition.example}</li>}
                    {definition.synonyms.length > 0 && <li>&ensp; &ensp;&ensp; &ensp; &ensp; &ensp;<span className={`${kalam.className}`}>synonyms: </span>{definition.synonyms.join(", ")}</li>}
                    {definition.antonyms.length > 0 && <li>&ensp; &ensp;&ensp; &ensp; &ensp; &ensp;<span className={`${kalam.className}`}>antonyms: </span>{definition.antonyms.join(", ")}</li>}
                </ul>;
            })}
        </li>
        {meaning.synonyms.length > 0 && <li>&ensp; &ensp;<span className={`${kalam.className}`}>Synonyms</span>: {meaning.synonyms.join(", ")}</li>}
        {meaning.antonyms.length > 0 && <li>&ensp; &ensp;<span className={`${kalam.className}`}>Antonyms</span>: {meaning.antonyms.join(", ")}</li>}
    </ul>;
}

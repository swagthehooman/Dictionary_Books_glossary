'use client';
export function Meanings({ meaning }: { meaning: Meanings; }) {
    return <ul>
        <li>&ensp; &ensp;<span>Part of speech: </span>{meaning.partOfSpeech}</li>
        <li>&ensp; &ensp;<span>Definitions:</span>
            {meaning.definitions.map((definition: Definitions, index: number) => {
                return <ul key={index}>
                    <li>&ensp; &ensp;&ensp; &ensp; &ensp;{index + 1}) definition: {definition.definition}.</li>
                    {meaning.synonyms.length > 0 && <li>&ensp; &ensp;&ensp; &ensp; &ensp; &ensp;<span>synonyms:</span>{definition.synonyms.join(", ")}</li>}
                    {meaning.antonyms.length > 0 && <li>&ensp; &ensp;&ensp; &ensp; &ensp; &ensp;<span>antonyms:</span>{definition.antonyms.join(", ")}</li>}
                </ul>;
            })}
        </li>
        {meaning.synonyms.length > 0 && <li>&ensp; &ensp;Synonyms: {meaning.synonyms.join(", ")}</li>}
        {meaning.antonyms.length > 0 && <li>&ensp; &ensp;Antonyms: {meaning.antonyms.join(", ")}</li>}
    </ul>;
}

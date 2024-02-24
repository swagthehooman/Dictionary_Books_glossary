'use client';
export function Meanings({ meaning }: { meaning: Meanings; }) {
    return <ul>
        <li>&ensp; &ensp;<span>Part of speech: </span>{meaning.partofspeech}</li>
        <li>&ensp; &ensp;<span>Definitions:</span>
            {meaning.definitions.map((i: Definitions) => {
                return <ul>
                    <li>&ensp; &ensp;&ensp; &ensp;definition: {i.definition}.</li>
                    {meaning.synonyms.length > 0 && <li>&ensp; &ensp;&ensp; &ensp;<span>synonyms:</span>{i.synonyms.join(", ")}</li>}
                    {meaning.antonyms.length > 0 && <li>&ensp; &ensp;&ensp; &ensp;<span>antonyms:</span>{i.antonyms.join(", ")}</li>}
                </ul>;
            })}
        </li>
        {meaning.synonyms.length > 0 && <li>&ensp; &ensp;Synonyms: {meaning.synonyms.join(", ")}</li>}
        {meaning.antonyms.length > 0 && <li>&ensp; &ensp;Antonyms: {meaning.antonyms.join(", ")}</li>}
    </ul>;
}

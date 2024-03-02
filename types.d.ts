type Meanings = {
    partOfSpeech: string,
    definitions: Definitions[],
    synonyms: string[],
    antonyms: string[],
}

type Definitions = {
    definition: string,
    synonyms: string[],
    antonyms: string[]
}

type Phonetics = {
    text: string,
    audio: string,
}

type WordData = [
    {
        word: string,
        phonetic: string,
        phonetics: Phonetics[],
        meanings: Meanings[]
    }
]
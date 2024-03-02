import axios from "axios";

export async function fetchWord (word:string){
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.data
    console.log(data)
    return data;
}
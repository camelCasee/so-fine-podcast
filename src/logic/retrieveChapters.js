import ivoox from 'node-ivoox'
// import { writeFile } from 'fs'

export default async function retrieveChapters() {
    const chapters = await ivoox.audios('https://www.ivoox.com/podcast-so-fine-podcast_sq_f11556093_1.html')

    // const jsonChapters = JSON.stringify(chapters)

    // writeFile('chapters.json', jsonChapters, error =>{
    //     if(error) console.error(error)
    // })
    return chapters
}
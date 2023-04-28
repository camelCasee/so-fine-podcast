import { promises as fs} from 'fs'

export default async function retrieveAllChapters(){
    const directory = './src/chapters/all-chapters.json'

    const data = await fs.readFile(directory, 'utf8')

    const chapters = JSON.parse(data)

    return chapters
}
import { promises as fs} from 'fs'

export default async function retrieveSeasonChapters(season){
    const directory = './data.json'

    const data = await fs.readFile(directory, 'utf8')

    const chapters = JSON.parse(data)

    return chapters
}
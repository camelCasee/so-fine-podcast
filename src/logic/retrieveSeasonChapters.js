import { promises as fs} from 'fs'

export default async function retrieveSeasonChapters(season){
    const directory = './src/chapters/season-2.json'

    const data = await fs.readFile(directory, 'utf8')

    const chapters = JSON.parse(data)

    return chapters
}
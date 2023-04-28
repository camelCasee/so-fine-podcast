import { promises as fs} from 'fs'

export default async function retrieveSeasonChapters(season){
    const directory = `./src/chapters/season-${season}.json`

    const data = await fs.readFile(directory)

    const chapters = JSON.parse(data)

    return chapters
}
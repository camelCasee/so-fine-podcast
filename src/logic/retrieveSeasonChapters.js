import { promises as fs} from 'fs'

export default async function retrieveSeasonChapters(season){
    const directory = `./chapters/season-${season}.json`

    const data = await fs.readFile(directory, 'utf8')

    const chapters = JSON.parse(data)

    return chapters
}
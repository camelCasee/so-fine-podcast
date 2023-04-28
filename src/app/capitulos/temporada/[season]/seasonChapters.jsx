import retrieveSeasonChapters from "@/logic/retrieveSeasonChapters"
import { promises as fs} from 'fs'

export default async function SeasonChapters({ season }) {
    // const chapters = await retrieveSeasonChapters(season)
    //     .catch(err =>  console.error('failed to read file', err))
    const directory = './data.json'

    const data = await fs.readFile(directory, 'utf8')

    const chapters = JSON.parse(data)

    return <div className="px-7">
        <span>Temporada {season}</span>
        <ul className="responsive-grid gap-y-4 items-center">
            {chapters?.map(chapter => {
                return <li key={chapter.title + season} className="px-2 max-w-[18rem] justify-self-center flex flex-col items-center">
                    <h2 className="w-full h-10 pt-2 text-xs">{chapter.title.replace('&amp;', '&')}</h2>
                    <img className="w-full" src={chapter.imgMain} alt={chapter.title} />
                    <audio className="w-full" src={chapter.file} controls></audio>
                </li>
            })}
        </ul>
    </div>
}
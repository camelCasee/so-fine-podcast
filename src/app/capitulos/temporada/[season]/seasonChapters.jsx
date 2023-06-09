// import retrieveSeasonChapters from "@/logic/retrieveSeasonChapters"
import SEASON_1 from "@/chapters/season-1"
import SEASON_2 from "@/chapters/season-2"
import SEASON_3 from "@/chapters/season-3"

export default async function SeasonChapters({ season }) {
    // const chapters = await retrieveSeasonChapters(season)
    //     .catch(err =>  console.error('failed to read file', err))
    const chapters = season === '1' ? SEASON_1 : season === '2' ? SEASON_2 : season === '3' ? SEASON_3: []

    return <div className="px-7">
        <span>Temporada {season}</span>
        <ul className="grid grid-cols-1 gap-y-4 items-center md:grid-cols-2 md:px-12">
            {chapters?.map(chapter => {
                return <li key={chapter.title + season} className="max-w-[24rem] justify-self-center flex flex-col items-center md:p-4">
                    <h2 className="w-full h-10 pt-2 text-xs md:text-lg">{chapter.title.replace('&amp;', '&')}</h2>
                    <img className="w-full" src={chapter.imgMain} alt={chapter.title} />
                    <audio className="w-full" src={chapter.file} controls></audio>
                </li>
            })}
        </ul>
    </div>
}
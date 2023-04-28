import retrieveSeasonChapters from "@/logic/retrieveSeasonChapters"

export default async function SeasonChapters({ season }) {
    let error
    const chapters = await retrieveSeasonChapters(season)
        .catch(err =>  error = err)

    if(error) return <div>{error.message}</div>

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
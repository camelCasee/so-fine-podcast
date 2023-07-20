import SEASON_1 from "@/chapters/season-1"
import SEASON_2 from "@/chapters/season-2"
import SEASON_3 from "@/chapters/season-3"

export default function chapterPage({params}){
    console.log(params)

    const { season, chapterTitle } = params

    const chapters = season === '1' ? SEASON_1 : season === '2' ? SEASON_2 : season === '3' ? SEASON_3: []

    const chapter = chapters.find(chapter => chapter.path === chapterTitle)

    return(
        <div className="w-full flex justify-center">
            <div key={chapter?.title + season} className="max-w-[30rem] justify-self-center flex flex-col items-center md:p-4">
                    <h2 className="w-full h-10 pt-2 text-xs md:text-lg">{chapter?.title.replace('&amp;', '&')}</h2>
                         <img className="w-full" src={chapter?.imgMain} alt={chapter?.title} />
                    <audio className="w-full" src={chapter?.file} controls></audio>
                    <p>{chapter?.description}</p>
                </div>
        </div>
    )
}
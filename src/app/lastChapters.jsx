import retrieveLastChapters from "@/logic/retrieveLastChapters"

export default async function Chapters() {

    const chapters = await retrieveLastChapters()

    return <div className="px-7">
        <ul className="responsive-grid gap-y-4 items-center">
            {chapters.slice(0, 4).map(chapter => {
                return <li key={chapter.title} className="px-2 max-w-[18rem] justify-self-center flex flex-col items-center">
                    <h2 className="w-full h-10 pt-2 text-xs">{chapter.title.replace('&amp;', '&')}</h2>
                    <img className="w-full" src={chapter.imgMain} alt={chapter.title} />
                    <audio className="w-full" src={chapter.file} controls></audio>
                </li>
            })}
        </ul>
    </div>
}


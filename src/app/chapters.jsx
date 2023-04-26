import retrieveChapters from "@/logic/retrieveChapters"

export default async function Chapters() {

    const chapters = await retrieveChapters()

    return <div>
        <ul className="flex flex-col gap-4">
            {chapters.slice(0, 3).map(chapter => {
                return <li key={chapter.title} className="px-4 flex flex-col items-center">
                    <h2 className="w-72">{chapter.title.replace('&amp;', '&')}</h2>
                    <img className="w-72" src={chapter.imgMain} alt={chapter.title} />
                    <audio className="w-72" src={chapter.file} controls></audio>
                </li>
            })}
        </ul>
    </div>
}


import retrieveLastChapters from "@/logic/retrieveLastChapters"

export default async function Chapters() {

    const chapters = await retrieveLastChapters()

    return <div className="px-7">
        <ul className="grid grid-cols-1 gap-y-4 items-center md:grid-cols-2 md:px-12">
            {chapters?.slice(0, 4).map(chapter => {
                return <li key={chapter.title} className="col-auto max-w-[24rem] justify-self-center flex flex-col items-center md:p-4">
                    <h2 className="w-full h-10 pt-2 text-xs md:text-lg ">{chapter.title.replace('&amp;', '&')}</h2>
                    <img className="w-full" src={chapter.imgMain} alt={chapter.title} />
                    <audio className="w-full" src={chapter.file} controls></audio>
                </li>
            })}
        </ul>
    </div>
}


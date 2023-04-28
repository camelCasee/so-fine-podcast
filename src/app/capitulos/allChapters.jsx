import retrieveAllChapters from "@/logic/retrieveAllChapters"

export default async function AllChapters() {
    const chapters =  await retrieveAllChapters()

    return <div className="px-7">
    <ul className="responsive-grid gap-y-4 items-center">
        {chapters.map(chapter => {
            return <li key={chapter.title} className="px-2 max-w-[18rem] justify-self-center flex flex-col items-center">
                <h2 className="w-full h-10 pt-2 text-xs">{chapter.title.replace('&amp;', '&')}</h2>
                <img className="w-full" src={chapter.imgMain} alt={chapter.title} />
                <audio className="w-full" src={chapter.file} controls></audio>
            </li>
        })}
    </ul>
</div>
}
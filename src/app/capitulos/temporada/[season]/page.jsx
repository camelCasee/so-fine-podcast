import SeasonChapters from "./seasonChapters";

export default function SeasonsPage({ params }) {
    const { season } = params

    return <div>
        <SeasonChapters season={season} />
    </div>
}
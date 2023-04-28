import SeasonChapters from "./seasonChapters";

export default function SeasonsPage({ params }) {
    const { season } = params

    return <div>
        <p></p>
        <SeasonChapters season={season} />
    </div>
}
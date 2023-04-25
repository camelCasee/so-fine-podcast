import ivoox from 'node-ivoox'

export default async function retrieveChapters() {
    const chapters = ivoox.audios('https://www.ivoox.com/podcast-so-fine-podcast_sq_f11556093_1.html')
    return chapters
}
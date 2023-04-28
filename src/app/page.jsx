import LastChapters from './lastChapters'

export default function Home() {
  return (
    <div >
      <div className='flex flex-col gap-2'>
        <h2 className='font-semibold text-lg text-center'>Ultimos Capitulos</h2>
        <LastChapters />
      </div>
    </div>
  )
}

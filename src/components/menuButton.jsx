export default function MenuButton({className, onClick, clicked}) {
    return <button onClick={onClick} className={`${className} flex flex-col w-12 gap-2.5`}>
        <div className={`bg-black h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left ${clicked && 'rotate-[38deg]'}`}></div>
        <div className={`bg-black h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left ${clicked && 'opacity-0'}`}></div>
        <div className={`bg-black h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left ${clicked && '-rotate-[38deg]'}`}></div>
    </button>
} 
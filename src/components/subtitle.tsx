type props = {
    text: string;
};

export function Subtitle({ text }: props) {
    return(
        <p className='text-[30px] w-full h-min font-bold text-zinc-700 pb-2 m-0'>
            {text}
        </p>
    );
};
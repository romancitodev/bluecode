import { Subtitle } from "./subtitle";

type props = {
    title: string;
    text?: string;
    pleft?: boolean;
    pright?: boolean;
    block?: boolean;
};

export function PatientDetails({ block, title, text, pleft, pright }: props){
    return (
    <div className={`${ block ? 'col-span-full' : 'col-span-1/2' }
        ${ pleft ? 'ml-4' : '' }
        ${ pright ? 'mr-4' : '' }
        mt-5`}>
        <Subtitle text={title} />

        <div
            className='w-full p-5 border-2 border-zinc-400 rounded-3xl bg-neutral-300 bg-opacity-25 hover:border-neutral-600 my-2 text-[19px] transition-all min-h-[150px] max-h-[300px] h-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-rounded-[25px] scrollbar-track-rounded-[25px] scroll-smooth hover:scrollbar-thumb-gray-300 overflow-x-scroll'>
            
            { text ?? 'Data not found' }

        </div>
    </div>
    );
} 
import { AreaState } from "@/icons/small/state";
import { SmallIcon } from "./small-icon";
import { Account } from "@/icons/small/account";
import { Info } from '@/icons/small/info';
import { GetState } from "./get-state";
import { Delete } from "@/icons/delete";
import { Modify } from "@/icons/modify";

type Props = { areaname: string; incharge: string; beds: number; cstate: boolean };

export function AreaCard({ areaname, incharge, beds, cstate }: Props) {
    let state = cstate

    return (
        <div className='flex justify-between w-full shadow-lg rounded-2xl border-2 border-zinc-300 py-5 px-10 m-auto text-[18px] font-medium animate-fade'>
            <div className='flex justify-between 2xl:gap-32 xl:gap-20 lg:gap-12 md:gap-8 sm:gap-4'>
                <div className="flex gap-5 h-max max-w-2xl w-max text-left items-center">
                    <SmallIcon>
                        <GetState state={state}/>
                    </SmallIcon>
                    <p className='2xl:w-[150px] xl:w-[140px] lg:w-[130px] md:w-[120px] sm:w-[100px]'>{areaname}</p>
                </div>
                <div className='flex justify-start gap-5 h-max text-left items-center'>
                    <SmallIcon> 
                        <Account />
                    </SmallIcon>
                    <p className='2xl:w-[150px] xl:w-[140px] lg:w-[130px] md:w-[120px] sm:w-[100px]'>{incharge}</p>
                </div>
                <div className='flex justify-start gap-5 h-max text-center items-center'>
                    <SmallIcon>
                        <Info />
                    </SmallIcon>
                    <p className='w-max'>{beds}</p>
                </div>
            </div>
            <div className='flex justify-between w-max gap-5'>
                <button type='button'>
                    <SmallIcon>
                        <Modify />
                    </SmallIcon>
                </button>
                <button type='button'>
                    <SmallIcon>
                        <Delete />
                    </SmallIcon>
                </button>
            </div>
        </div>
    );
}

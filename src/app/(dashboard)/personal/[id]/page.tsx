import { PersonalGridInfo } from "@/components/personalInfo";
import { Title } from "@/components/title";

type Params = {
    params: {
        id: string;
    }  ;
};

export default function Page({ params }: Params) {
    console.log({ page: true, params });
    
    return (
        <div className='w-full h-full grid m-0'>
            <Title text='Ficha empleado' />

            <div className='mx-28'>
                <PersonalGridInfo id={ params.id } />
            </div>
        </div>
    );
}
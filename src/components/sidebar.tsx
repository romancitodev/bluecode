import { Logo } from '@/icons/logo';
import { Icon } from './icon';

export function SideBar() {
	return (
		<div className='w-[120px] h-screen flex-col justify-between items-start inline-flex border-2 border-rose-500'>
			<div className='p-5'>
				<Icon>
					<Logo />
				</Icon>
			</div>
		</div>
	);
}

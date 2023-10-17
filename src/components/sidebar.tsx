'use client';

import { Logo } from '@/icons/logo';
import { Icon } from './icon';
import { LogOut } from '@/icons/logout';
import { Bell } from '@/icons/bell';
import { Users } from '@/icons/users';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';
import { Areas } from '@/icons/areas';
import { Patient } from '@/icons/patients';

export function SideBar() {
	const pathname = usePathname();

	return (
		<div className='w-[120px] h-screen flex-col justify-between inline-flex border-r-2 border-neutral-300'>
			<div className='grid justify-center w-full gap-5 p-5 border-b-2 border-neutral-300'>
				<Icon>
					<Logo />
				</Icon>
			</div>
			<div className='grid h-full w-full p-5 content-start justify-center -5 gap-y-5'>
				<Link href='/reports'>
					<Icon selected={pathname === '/reports'}>
						<Bell />
					</Icon>
				</Link>

				<Link href='/personal'>
					<Icon selected={pathname === '/personal'}>
						<Users />
					</Icon>
				</Link>

				<Link href='/areas'>
					<Icon selected={pathname === '/areas'}>
						<Areas />
					</Icon>
				</Link>

				<Link href='/patients'>
					<Icon selected={pathname === '/patients'}>
						<Patient />
					</Icon>
				</Link>
			</div>
			<div className='grid justify-center w-full gap-5 p-5 border-t-2 border-neutral-300'>
				<Link href='/login'>
					<Icon>
						<LogOut />
					</Icon>
				</Link>
			</div>
		</div>
	);
}

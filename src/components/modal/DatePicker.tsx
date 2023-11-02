'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

type Props = {
	placeholder?: string;
};

export function DatePicker({ placeholder }: Props) {
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className='border-2 border-zinc-400 rounded-xl bg-neutral-300 bg-opacity-25 hover:border-neutral-600 hover:bg-neutral-300 hover:bg-opacity-25 py-2 px-4 text-[19px] justify-start h-[48.5px] text-[#000000] font-[400] transition-all'>
					{date ? (
						format(date, 'PPP')
					) : (
						<span className='text-[#9ca3af]'>{placeholder}</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
			</PopoverContent>
		</Popover>
	);
}

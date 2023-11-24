'use client';

import * as React from 'react';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select';
import {
	FieldValues,
	UseControllerProps,
	useController,
} from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

type Props = {
	max_day?: Date;
	min_day?: Date;
	error?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const DatePicker = <T extends FieldValues>(
	props: UseControllerProps<T> & Props,
) => {
	const { placeholder, min_day, max_day, error, ...controllerProps } = props;
	const {
		field: { onChange },
	} = useController(controllerProps);

	const [date, setDate] = React.useState<Date>();
	const currentYear = new Date().getFullYear();
	const minYear = min_day ? min_day.getFullYear() : 1930;
	const maxYear = max_day ? max_day.getFullYear() + 1 : currentYear + 1000;
	const numElements = Math.max(0, maxYear - minYear);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<div>
					<Button
						type='button'
						className='w-full border-2 border-zinc-400 rounded-xl bg-neutral-300 bg-opacity-25 hover:border-neutral-600 hover:bg-neutral-300 hover:bg-opacity-25 py-2 px-4 text-[19px] justify-start h-[48.5px] text-[#000000] font-[400] transition-all'
					>
						{date ? (
							format(date, 'dd-MM-yyyy')
						) : (
							<span className='text-[#9ca3af]'>{placeholder}</span>
						)}
					</Button>
					<ErrorMessage text={error} />
				</div>
			</PopoverTrigger>
			<PopoverContent align='start' className='flex w-auto flex-col space-y-2 p-2'>
				<Select
					onValueChange={value => {
						const parsedDate = new Date(
							parseInt(value),
							date?.getMonth() || 0,
							date?.getDate() || 1,
						);
						setDate(parsedDate);
						onChange(parsedDate);
					}}
				>
					<SelectTrigger>
						<SelectValue placeholder='Select' {...props} />
					</SelectTrigger>
					<SelectContent position='popper' className='h-full max-h-72'>
						{Array(numElements)
							.fill(0)
							.map((_, i) => {
								const date = (min_day || new Date('1930-01-01')).getFullYear() + i + 1;
								return <SelectItem value={`${date}`}>{date}</SelectItem>;
							})
							.toReversed()}
					</SelectContent>
				</Select>
				<Calendar
					mode='single'
					selected={date}
					onSelect={d => {
						setDate(d);
						onChange(d);
					}}
					disabled={day =>
						day < (min_day || new Date('1930-01-01')) ||
						(max_day && day > max_day) ||
						false
					}
				/>
			</PopoverContent>
		</Popover>
	);
};

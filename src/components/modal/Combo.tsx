'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/utils';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

type Selectable = {
	label: string;
	value: string;
};

type Props = {
	placeholder: string;
	options: Selectable[];
	empty?: string;
	onChange?: (e: string) => void;
};

export function ComboBox({ placeholder, options, empty, onChange }: Props) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

	const isSelected = options.find(option => option.value === value);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className={cn(
						'text-[19px] w-full h-full rounded-xl bg-neutral-300/25 border-zinc-400 border-2 justify-between',
						!isSelected ? 'text-slate-600/50' : '',
					)}
				>
					{value
						? options.find(option => option.value === value)?.label
						: placeholder}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-80' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-full p-0'>
				<Command className='bg-neutral-100/25 py-2 px-4 transition-all w-full'>
					<CommandInput placeholder={placeholder} />
					<CommandEmpty>{empty}</CommandEmpty>
					<CommandGroup>
						{options.map(option => (
							<CommandItem
								className='text-[16px]'
								key={option.value}
								value={option.value}
								onSelect={currentValue => {
									setValue(currentValue === value ? '' : currentValue);
									if (onChange) {
										onChange(currentValue);
									}
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										value === option.value ? 'opacity-100' : 'opacity-0',
									)}
								/>
								{option.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

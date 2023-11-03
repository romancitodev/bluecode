'use client';

import { ComboBox } from './Combo';
import { TagList } from './TagList';
import { useState } from 'react';

type Selectable = {
	label: string;
	value: string;
};

type Props = {
	placeholder: string;
	options: Selectable[];
	empty: string;
};

export function TagInput({ placeholder, options, empty, ...props }: Props) {
	const [tags, setTags] = useState<Set<string>>(new Set());
	console.log(tags);
	return (
		<div className='grid w-[800px] gap-5 overflow-x-auto'>
			<ComboBox
				placeholder={placeholder}
				options={options}
				empty={empty}
				onChange={e => setTags(new Set([...tags, e]))}
			/>
			<TagList tags={tags} setTags={setTags} {...props} />
		</div>
	);
}

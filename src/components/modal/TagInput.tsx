'use client';

import React from 'react';
import { ComboBox } from './Combo';
import { TagList } from './TagList';
import { useState } from 'react';
import {
	FieldValues,
	UseControllerProps,
	useController,
} from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

type Selectable = {
	label: string;
	value: string;
};

type Props = {
	placeholder: string;
	options: Selectable[];
	empty: string;
	error?: string;
};

export const TagInput = <T extends FieldValues>(
	props: UseControllerProps<T> & Props,
) => {
	const { placeholder, options, empty, error, ...controllerProps } = props;
	const {
		field: { onChange },
	} = useController(controllerProps);
	const [tags, setTags] = useState<string[]>([]);

	const onRemoveTag = (target: string) => {
		setTags(old => {
			const newTags = old.filter(tag => tag !== target);
			onChange(newTags);
			return newTags;
		});
	};
	return (
		<div className='grid w-full gap-5 overflow-x-auto'>
			<ComboBox
				placeholder={placeholder}
				options={options}
				empty={empty}
				onCustomSet={e => {
					if (!tags.includes(e)) {
						// Handle the case when the tag is already in the array
						setTags(old => {
							const newTags = [...old, e];
							onChange(newTags);
							return newTags;
						});
					}
				}}
			/>

			<TagList tags={tags} setTags={onRemoveTag} />
			<ErrorMessage text={error} />
		</div>
	);
};

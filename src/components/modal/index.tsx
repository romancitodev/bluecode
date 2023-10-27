import React from 'react';
import { Button } from './Button';
import { Container } from './Container';
import { Grid } from './Grid';
import { TextField } from './TextField';
import { TextInput } from './TextInput';
import { Group } from './Group';
import { Title } from './Title';
import { TagInput } from './TagInput';

type Props = {
	open: boolean;
	children: React.ReactNode;
};
export function Modal({ open, children }: Props) {
	return !open ? null : (
		<div
			className='absolute w-full h-full bg-black bg-opacity-10 flex justify-between
 overflow-hidden'
		>
			{children}
		</div>
	);
}

Modal.Container = Container;
Modal.Button = Button;
Modal.Grid = Grid;
Modal.TextField = TextField;
Modal.TextInput = TextInput;
Modal.Group = Group;
Modal.Title = Title;
Modal.TagInput = TagInput;

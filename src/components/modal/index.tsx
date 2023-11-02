import React from 'react';
import { Button } from './Button';
import { Container } from './Container';
import { Grid } from './Grid';
import { TextField } from './TextField';
import { LargeTextField } from './LargeTextField';
import { TextInput } from './TextInput';
import { Group } from './Group';
import { Title } from './Title';
import { TagInput } from './TagSearcher';
import { ComboBox } from './Combo';
import { DatePicker } from './DatePicker';

type Props = {
	open: boolean;
	children: React.ReactNode;
};
export function Modal({ open, children }: Props) {
	return !open ? null : (
		<form className='fixed w-full h-full bg-black/10 grid justify-center content-center backdrop-blur-sm'>
			{children}
		</form>
	);
}

Modal.Container = Container;
Modal.Button = Button;
Modal.Grid = Grid;
Modal.TextField = TextField;
Modal.LargeTextField = LargeTextField;
Modal.TextInput = TextInput;
Modal.Group = Group;
Modal.Title = Title;
Modal.TagInput = TagInput;
Modal.ComboBox = ComboBox;
Modal.DatePicker = DatePicker;

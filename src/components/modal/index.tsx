import React, { FormHTMLAttributes } from 'react';
import { Button } from './Button';
import { Container } from './Container';
import { Grid } from './Grid';
import { TextField } from './TextField';
import { LargeTextInput } from './LargeTextInput';
import { TextInput } from './TextInput';
import { Group } from './Group';
import { Title } from './Title';
import { TagInput } from './TagInput';
import { ComboBox } from './Combo';
import { DatePicker } from './DatePicker';
import { ControlledComboBox } from './ControlledComboBox';

type Props = {
	open: boolean;
	children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;
export function Modal({ open, children, ...props }: Props) {
	return !open ? null : (
		<form
			className='fixed w-full h-full bg-black/10 grid justify-center content-center backdrop-blur-sm'
			{...props}
		>
			{children}
		</form>
	);
}

Modal.Container = Container;
Modal.Button = Button;
Modal.Grid = Grid;
Modal.TextField = TextField;
Modal.LargeTextInput = LargeTextInput;
Modal.TextInput = TextInput;
Modal.Group = Group;
Modal.Title = Title;
Modal.TagInput = TagInput;
Modal.ComboBox = ComboBox;
Modal.DatePicker = DatePicker;
Modal.ControlledCombo = ControlledComboBox;

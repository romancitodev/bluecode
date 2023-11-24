type Props = {
	text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ text, onClick, className, ...props }: Props) {
	return (
		<button type='button' {...props} onClick={onClick} className={className}>
			{text}
		</button>
	);
}

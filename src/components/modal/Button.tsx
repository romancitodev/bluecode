type Props = {
	text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ text, onClick, className, ...props }: Props) {
	return (
		<button {...props} onClick={onClick} className={className} type='button'>
			{text}
		</button>
	);
}

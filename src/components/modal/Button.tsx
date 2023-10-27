type Props = {
	text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ text, onClick, className }: Props) {
	return (
		<button onClick={onClick} className={className}>
			{text}
		</button>
	);
}

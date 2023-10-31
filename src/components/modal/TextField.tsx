type Props = {
	text: string;
};

export function TextField({ text }: Props) {
	return <p className='font-bold text-[24px]'>{text}</p>;
}

export function ErrorMessage({ text }: { text?: string }) {
	return <label className='text-red-500'>{text}</label>;
}

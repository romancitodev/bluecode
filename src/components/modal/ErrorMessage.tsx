export function ErrorMessage({ text }: { text?: string }) {
	return (
		<div className='w-auto'>
			<label className='text-red-500 w-auto'>{text}</label>
		</div>
	);
}

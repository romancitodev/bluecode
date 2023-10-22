export function Form({
	children,
	onSubmit,
}: {
	children: React.ReactNode;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<form onSubmit={onSubmit} className='grid gap-5 w-[500px] h-max items-center'>
			{children}
		</form>
	);
}

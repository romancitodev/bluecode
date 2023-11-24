export function PatientNotFound() {
	return (
		<div className='w-full h-[700px] flex content-center justify-center items-center gap-5 overflow-hidden'>
			<h2 className='font-bold text-2xl'>404</h2>
			<div className='w-[2px] h-12 bg-slate-800' />
			<p className='font-medium text-md'>
				Patient <span className='font-bold'>not found</span>{' '}
			</p>
		</div>
	);
}

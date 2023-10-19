import { IconProps } from './props';

export function Patient({ stroke }: IconProps) {
	return (
		<svg
			width='38'
			height='39'
			viewBox='0 0 38 39'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<title>User icon</title>
			<path
				id='Vector'
				d='M36.5 11.5455C36.5 6.27424 32.4186 2 27.3844 2C23.6219 2 20.3903 4.38848 19 7.79727C17.6097 4.38848 14.3781 2 10.6136 2C5.58333 2 1.5 6.27424 1.5 11.5455C1.5 26.8606 19 37 19 37C19 37 36.5 26.8606 36.5 11.5455Z'
				stroke={stroke}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

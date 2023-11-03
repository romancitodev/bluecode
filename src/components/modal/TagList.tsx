import { Tag } from './Tag';

type Props = {
	tags: Set<string>;
	setTags: (e: Set<string>) => void;
};

export function TagList({ tags, setTags, ...props }: Props) {
	return (
		<div
			className='h-max w-full content-center justify-stretch flex flex-wrap gap-5'
			{...props}
		>
			{[...tags].map(t => (
				<Tag
					value={t}
					onClick={() =>
						setTags(old => new Set([...old].filter(remove => remove !== t)))
					}
				/>
			))}
		</div>
	);
}

import { Tag } from './Tag';

type Props = {
	tags: Set<string>;
	setTags: (e: Set<string>) => void;
};

export function TagList({ tags, setTags }: Props) {
	return (
		<div className='h-[50px] justify-start grid grid-flow-col no-scrollbar gap-5 overflow-x-auto'>
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

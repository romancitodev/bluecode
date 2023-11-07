import { Tag } from './Tag';

type Props = {
	tags: string[];
	setTags: (e: string) => void;
};

export function TagList({ tags, setTags, ...props }: Props) {
	return (
		<div
			className='h-max w-full content-center justify-stretch flex flex-wrap gap-5'
			{...props}
		>
			{tags.map(t => (
				<Tag value={t} onClick={() => setTags(t)} />
			))}
		</div>
	);
}

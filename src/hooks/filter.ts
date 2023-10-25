import { useEffect, useState } from 'react';

type Form = { name: string; dni: number };

export function useFilter() {
	const [input, setInput] = useState<Form>({ name: '', dni: 0 });
	const [error, setError] = useState('');

	useEffect(() => {
		if (!input) return;

		if (!input.name.match(/^\w+$/g)) {
			setError('invalid characters');
			return;
		}
	}, [input]);

	return { filter: input, setFilter: setInput, error };
}

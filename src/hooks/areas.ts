import { useCallback, useState } from 'react';

type Area = {
	areaname: string;
	incharge: string;
	beds: number;
	variant: 'open' | 'occupied';
};

async function fetchAreaData({ areaname }: Pick<Area, 'areaname'>) {
	const response = await fetch(
		`http://localhost:3000/api/areas?name=${areaname}`,
	);
	return await response.json();
}

export function useAreas() {
	const [areas, setAreas] = useState<Area[]>([]);
	const [loading, setLoading] = useState(true);

	const getAreas = useCallback(async ({ areaname }: Pick<Area, 'areaname'>) => {
		setLoading(true);
		fetchAreaData({ areaname }).then(({ data }) => {
			setLoading(false);
			setAreas(data);
		});
	}, []);

	return { areas, getAreas, loading };
}

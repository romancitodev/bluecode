import { useCallback, useState } from 'react';

type Personal = { name: string; surname: string; dni: number };

type SimplePersonal = Omit<Personal, 'surname'>;

async function fetchPatientData({ name, dni }: SimplePersonal) {
	const response = await fetch(
		`http://localhost:3000/api/personal?name=${name}&dni=${dni}`,
	);
	return await response.json();
}

export function usePersonal() {
	const [personal, setPersonal] = useState<Personal[]>([]);
	const [loading, setLoading] = useState(true);

	const getPersonal = useCallback(async ({ name, dni }: SimplePersonal) => {
		setLoading(true);
		fetchPatientData({ name, dni }).then(({ data }) => {
			setLoading(false);
			setPersonal(data);
		});
	}, []);

	return { personal, getPersonal, loading };
}

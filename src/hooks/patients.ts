import { useCallback, useState } from 'react';

type Patient = { name: string; dni: string };

async function fetchPatientData({ name, dni }: Patient) {
	const response = await fetch(
		`http://localhost:3000/api/patients?name=${name}&dni=${dni}`,
	);
	return await response.json();
}

export function usePatients() {
	const [patients, setPatients] = useState<Patient[]>([]);
	const [loading, setLoading] = useState(false);

	const getPatients = useCallback(async ({ name, dni }: Patient) => {
		setLoading(true);
		fetchPatientData({ name, dni }).then(({ data }) => {
			setLoading(false);
			setPatients(data);
		});
	}, []);

	return { patients, getPatients, loading };
}

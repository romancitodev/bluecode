import { useCallback, useState } from 'react';

type Patient = { name: string; surname: string; dni: string };

type SimplePatient = Omit<Patient, 'surname'>;

async function fetchPatientData({ name, dni }: SimplePatient) {
	const response = await fetch(
		`http://localhost:3000/api/patients?name=${name}&dni=${dni}`,
	);
	return await response.json();
}

export function usePatients() {
	const [patients, setPatients] = useState<Patient[]>([]);
	const [loading, setLoading] = useState(true);

	const getPatients = useCallback(async ({ name, dni }: SimplePatient) => {
		setLoading(true);
		fetchPatientData({ name, dni }).then(({ data }) => {
			setLoading(false);
			setPatients(data);
		});
	}, []);

	return { patients, getPatients, loading };
}

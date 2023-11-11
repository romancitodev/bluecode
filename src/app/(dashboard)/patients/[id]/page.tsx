type Params = {
	params: {
		id: string;
	};
};

export default async function Page({ params }: Params) {
	const data = await fetch(
		`http://localhost:3000/api/patients?dni=${params.id}`,
	);

	console.log({ page: true, data });

	return (
		<div>
			<h1>Esto es patients</h1>
			<p>{params.id}</p>
		</div>
	);
}

export const formatDni = (dni: number) =>
	String(dni).padStart(9, '0').replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');

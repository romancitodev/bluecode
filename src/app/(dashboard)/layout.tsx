import { SideBar } from '@/components/sidebar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<SideBar />
			{children}
		</div>
	);
}

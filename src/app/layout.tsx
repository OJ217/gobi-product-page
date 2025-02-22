import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/styles/globals.css';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import { cn } from '@/lib/utils';

const fhOscar = localFont({
	variable: '--font-fh-oscar',
	src: [
		{
			path: '../../public/fonts/fh-oscar-regular.otf',
			style: 'normal',
			weight: '400',
		},
		{
			path: '../../public/fonts/fh-oscar-bold.otf',
			style: 'normal',
			weight: '700',
		},
	],
});

export const metadata: Metadata = {
	title: 'Gobi Product Page',
	description: 'Product page clone of Gobi Cashmere Web',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn('antialiased', fhOscar.variable)}>
				<Header />
				<main className='min-h-screen pt-16 lg:pt-24'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

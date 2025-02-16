import Image from 'next/image';

import IconBag from '@/components/assets/bag';
import IconSearch from '@/components/assets/search';
import IconHamburger from '@/components/assets/hamburger';
import { NAVIGATION_LINKS } from '@/lib/constants';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='flex items-center p-5 justify-between fixed inset-x-0 top-0 bg-warm-tone-2 z-100 lg:px-10 lg:py-0 lg:h-16'>
			<button className='lg:hidden'>
				<IconHamburger />
			</button>
			<div className='absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:translate-none'>
				<Image
					priority
					src={'/assets/logo.svg'}
					alt='logo'
					width={97}
					height={33}
				/>
			</div>
			<nav className='hidden lg:block'>
				<ul className='space-x-6.75'>
					{NAVIGATION_LINKS.map(({ label }, index) => (
						<Link
							key={index}
							href={'#'}
						>
							<li className='inline-block text-sm'>{label}</li>
						</Link>
					))}
				</ul>
			</nav>
			<div className='flex items-center gap-4 text-sm lg:gap-6.75'>
				<button>
					<IconSearch />
				</button>
				<button>
					<IconBag />
				</button>
				<Link
					href={'#'}
					className='hidden lg:inline'
				>
					Login
				</Link>
				<button className='hidden lg:inline'>Bag [2]</button>
			</div>
		</header>
	);
}

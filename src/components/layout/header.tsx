import Image from 'next/image';
import Link from 'next/link';

import IconBag from '@/components/assets/bag';
import IconHamburger from '@/components/assets/hamburger';
import IconSearch from '@/components/assets/search';
import { HEADER_LINKS } from '@/lib/constants';

export default function Header() {
	return (
		<header className='fixed inset-x-0 top-0 z-100'>
			<div className='bg-warm-tone-4 hidden h-8 items-center justify-center lg:flex'>
				<p className='text-sm'>Free Shipping on Orders Over $100</p>
			</div>
			<div className='bg-warm-tone-2 flex h-16 items-center justify-between px-5 lg:px-10'>
				<button className='lg:hidden'>
					<IconHamburger />
				</button>
				<div className='absolute left-1/2 -translate-x-1/2 transform lg:static lg:translate-none lg:transform-none'>
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
						{HEADER_LINKS.map(({ label }, index) => (
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
			</div>
		</header>
	);
}

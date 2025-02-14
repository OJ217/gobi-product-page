import Image from 'next/image';

export default function Header() {
	return (
		<header className='flex items-center p-5 justify-between fixed inset-x-0 top-0 bg-warm-tone-2'>
			<button>
				<Image
					aria-hidden
					src='/icons/hamburger.svg'
					alt='hamburger_icon'
					width={24}
					height={24}
				/>
			</button>
			<div className='absolute left-1/2 transform -translate-x-1/2'>
				<Image
					aria-hidden
					src={'/assets/logo.svg'}
					alt='logo'
					width={97}
					height={32}
				/>
			</div>
			<div className='flex items-center gap-4'>
				<button>
					<Image
						aria-hidden
						src={'/icons/search.svg'}
						alt='search_icon'
						width={24}
						height={24}
					/>
				</button>
				<button>
					<Image
						aria-hidden
						src={'/icons/bag.svg'}
						alt='bag_icon'
						width={18}
						height={18}
					/>
				</button>
			</div>
		</header>
	);
}

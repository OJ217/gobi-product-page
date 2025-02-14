import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className='space-y-[3.75rem] py-10 px-5 bg-warm-tone-4 text-sm'>
			<section className='space-y-5'>
				<p className='text-subdued text-xs'>Let’s keep in touch!</p>
				<p>Get glowing with our latest products and exclusive events.</p>
			</section>
			<section className='space-y-5'>
				<p className='text-subdued text-xs'>About Us</p>
				<p>
					Gobi Cashmere is ... lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum enim
					vel dapibus commodo. Suspendisse nec pharetra metus.{' '}
					<Link
						href={'#'}
						className='underline text-subdued'
					>
						Learn More
					</Link>
				</p>
			</section>
			<section className='grid grid-cols-2 gap-5'>
				<div className='space-y-5'>
					<p className='text-sm text-subdued'>Follow</p>
					<div className='space-y-1 [&_a]:block'>
						<Link href={'#'}>Facebook</Link>
						<Link href={'#'}>Youtube</Link>
						<Link href={'#'}>Twitter</Link>
						<Link href={'#'}>Instagram</Link>
					</div>
				</div>
				<div className='space-y-5'>
					<p className='text-sm text-subdued'>Customer Care</p>
					<div className='space-y-1 [&_a]:block'>
						<Link href={'#'}>Support Center</Link>
						<Link href={'#'}>Cashmere Care</Link>
						<Link href={'#'}>Store Location</Link>
						<Link href={'#'}>Return Portal</Link>
						<Link href={'#'}>Rewards Program</Link>
					</div>
				</div>
			</section>

			<section>
				<div className='flex items-center gap-4'>
					<Image
						aria-hidden
						src={'/icons/map-pin.svg'}
						alt='map_pin_icon'
						width={14}
						height={18}
					/>
					<div className='text-xs'>
						<p>Country</p>
						<p>United States (EN)</p>
					</div>
				</div>
			</section>

			<section className='text-subdued text-xs'>
				<ul className='space-y-2.5'>
					<li>
						<Link href={'#'}>Terms & Conditions</Link>
					</li>
					<li>
						<Link href={'#'}>Shipping & Return Policy</Link>
					</li>
					<li>
						<Link href={'#'}>Privacy Policy</Link>
					</li>
					<li>
						<Link href={'#'}>Affiliate</Link>
					</li>
					<li>
						<p>© 2025 Gobi Cashmere. All rights reserved</p>
					</li>
				</ul>
			</section>
		</footer>
	);
}

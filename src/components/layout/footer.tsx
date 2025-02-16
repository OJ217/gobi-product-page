import Link from 'next/link';

import { IconChevronRight } from '@/components/assets/chevron';
import IconMapPin from '@/components/assets/map-pin';

import { CUSTOMER_CARE_LINKS, SOCIAL_LINKS, SUPPORT_LINKS } from '@/lib/constants';

export default function Footer() {
	return (
		<footer className='bg-warm-tone-4 px-5 py-10 lg:p-10'>
			<div className='space-y-15 text-sm lg:hidden'>
				<EmailSubscription />
				<About />
				<div className='grid grid-cols-2 gap-5'>
					<SocialLinks />
					<CustomerCare />
				</div>
				<SelectCountry />
				<SupportLinks />
			</div>
			<div className='hidden space-y-20 lg:block'>
				<div className='grid grid-cols-[36fr_64fr] gap-39'>
					<div className='space-y-15'>
						<About />
						<SelectCountry />
					</div>
					<div className='grid grid-cols-[28fr_28fr_44fr] gap-10'>
						<SocialLinks />
						<CustomerCare />
						<EmailSubscription />
					</div>
				</div>
				<SupportLinks />
			</div>
		</footer>
	);
}

function EmailSubscription() {
	return (
		<section>
			<p className='text-subdued mb-5 text-xs'>Let’s keep in touch!</p>
			<p className='mb-10 lg:mb-5'>Get glowing with our latest products and exclusive events.</p>
			<div className='border-b-graphite flex items-center gap-2 border-b px-1.25'>
				<input
					type='email'
					placeholder='Email Address'
					className='placeholder:text-subdued h-13.75 flex-grow border-none outline-none'
				/>
				<button className='hover:bg-subdued/25 focus-within:bg-subdued/25 grid size-6 place-content-center rounded-full transition outline-none'>
					<IconChevronRight />
				</button>
			</div>
		</section>
	);
}

function About() {
	return (
		<section className='space-y-5'>
			<p className='text-subdued text-xs'>About Us</p>
			<p>
				Gobi Cashmere is ... lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum enim vel
				dapibus commodo. Suspendisse nec pharetra metus.{' '}
				<Link
					href={'#'}
					className='text-subdued underline'
				>
					Learn More
				</Link>
			</p>
		</section>
	);
}

function SocialLinks() {
	return (
		<div className='space-y-5'>
			<p className='text-subdued text-xs'>Follow</p>
			<div className='space-y-1 [&_a]:block'>
				{SOCIAL_LINKS.map(({ label, href }) => (
					<Link
						key={label}
						href={href}
						target='_blank'
					>
						{label}
					</Link>
				))}
			</div>
		</div>
	);
}

function CustomerCare() {
	return (
		<div className='space-y-5'>
			<p className='text-subdued text-xs'>Customer Care</p>
			<div className='space-y-1 [&_a]:block [&_a]:whitespace-nowrap'>
				{CUSTOMER_CARE_LINKS.map(({ label, href }) => (
					<Link
						key={label}
						href={href}
					>
						{label}
					</Link>
				))}
			</div>
		</div>
	);
}

function SelectCountry() {
	return (
		<section>
			<div className='flex items-center gap-4'>
				<IconMapPin />
				<div className='text-xs'>
					<p>Country</p>
					<p>United States (EN)</p>
				</div>
			</div>
		</section>
	);
}

function SupportLinks() {
	return (
		<section className='text-subdued text-xs'>
			<ul className='flex flex-col gap-2.5 lg:flex-row lg:items-center lg:gap-10'>
				<li className='order-last lg:order-first'>
					<p>© 2025 Gobi Cashmere. All rights reserved</p>
				</li>
				<li className='hidden h-4.25 w-px bg-[#3C3C3C] lg:block' />
				{SUPPORT_LINKS.map(({ label, href }) => (
					<li key={label}>
						<Link href={href}>{label}</Link>
					</li>
				))}
			</ul>
		</section>
	);
}

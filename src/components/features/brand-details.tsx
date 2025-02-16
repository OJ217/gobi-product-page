import { BRAND_DETAILS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandDetails() {
	return (
		<section className='bg-warm-tone-3 lg:grid lg:grid-cols-4 lg:pt-30 lg:pb-10'>
			<div className='flex flex-col gap-2.5 px-5 py-10 lg:justify-between lg:px-10 lg:pt-0'>
				<h3 className='text-2xl lg:text-[2rem]'>Take comfort in traceable affordable exquisite quality</h3>
				<div className='space-y-2.5'>
					<p className='text-xs lg:text-sm'>
						Our standards for our cashmere are as high as they come with a focus on accessibility
						responsibility and traceability.
					</p>
					<Link
						href={'#'}
						className='text-xs underline underline-offset-6 lg:text-sm'
					>
						Learn More
					</Link>
				</div>
			</div>

			{BRAND_DETAILS.map(({ label, image }, index) => (
				<div key={index}>
					<Image
						src={image.path}
						alt={image.alt}
						width={1440}
						height={1440}
						className='aspect-square object-cover'
					/>
					<div className='px-5 pt-2.5 pb-10 lg:px-0'>
						<h5 className='text-lg lg:text-2xl'>{label}</h5>
					</div>
				</div>
			))}
		</section>
	);
}

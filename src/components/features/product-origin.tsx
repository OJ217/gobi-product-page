import Image from 'next/image';
import Link from 'next/link';

import { GoatGray, GoatWhite } from '@/components/assets/goat';

import { PRODUCT_ORIGIN } from '@/lib/constants';

export default function ProductOrigin() {
	const { province, process, composition } = PRODUCT_ORIGIN;

	return (
		<section>
			<div>
				<h3 className='px-5 pt-5 pb-10 text-[2rem] lg:px-10 lg:pt-15 lg:pb-10 lg:text-[4rem]'>
					Quality you can feel
				</h3>
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-6 [&>*]:aspect-3/4'>
				<div
					style={{ backgroundImage: `url(${province.imagePath})` }}
					className='bg-graphite/25 flex flex-col items-center justify-center gap-10 bg-cover bg-center p-5 text-white bg-blend-multiply'
				>
					<div className='text-center'>
						<p className='text-xs uppercase lg:text-sm'>Sourced from</p>
						<p className='text-lg lg:text-2xl'>{province.name} Province</p>
					</div>
					<Link
						href={'#'}
						className='text-xs underline underline-offset-[6px] lg:text-sm'
					>
						Learn More
					</Link>
				</div>
				<div className='bg-warm-tone-4 flex flex-col items-center justify-center gap-10 p-5 lg:order-6'>
					<div className='max-w-30 text-center text-lg lg:text-2xl'>
						<span>Cashmere from</span>
						<GoatGray className='mx-1.25 inline-block h-7 w-6' />
						<span>and</span>
						<GoatWhite className='mx-1.25 inline-block h-7 w-6' />
						<span>goats</span>
					</div>
					<Link
						href={'#'}
						className='underline underline-offset-[6px]'
					>
						Learn More
					</Link>
				</div>
				<div className='flex items-center justify-center bg-white/20 bg-[url(/images/sweater.jpeg)] bg-[length:350%] bg-[55%_45%] p-5 bg-blend-multiply lg:order-4'>
					<p className='max-w-28 text-center text-sm lg:text-base'>
						The softest lightweight cashmere at 13 microns
					</p>
				</div>
				<div className='bg-lime flex items-center justify-center text-center lg:order-5'>
					{composition.map(({ material, percentage }, index) => (
						<div key={index}>
							<h1 className='text-[2rem] lg:text-[4rem]'>{percentage}%</h1>
							<p className='text-sm lg:text-sm'>{material}</p>
						</div>
					))}
				</div>
				<div className='bg-warm-tone-4 space-y-5 p-5'>
					<p className='text-xs uppercase'>The Process</p>
					<ul className='space-y-2.5 text-lg lg:text-2xl'>
						{process.map(stage => (
							<li key={stage}>{stage}</li>
						))}
					</ul>
				</div>
				<Image
					src={'/images/knitting-factory.webp'}
					alt='Knitting Factory'
					width={1440}
					height={1920}
					className='h-full w-full object-cover object-center'
				/>
			</div>

			<div className='relative'>
				<Image
					src={'/images/reborn-cashmere.jpeg'}
					alt='Reborn Cashmere'
					width={2160}
					height={1440}
					className='h-[735px] object-cover object-center lg:aspect-12/7 lg:h-auto'
				/>
				<div className='to-graphite/60 absolute inset-x-0 top-1/5 bottom-0 bg-gradient-to-b from-transparent lg:top-2/7' />
				<div className='absolute inset-x-0 bottom-0 space-y-5 px-5 py-7.5 text-white lg:px-13.75 lg:py-11.75'>
					<div className='space-y-2.5'>
						<h1 className='text-[2rem] lg:text-[4rem]'>Reborn Cashmere</h1>
						<p className='max-w-194 leading-4.75 lg:text-lg lg:leading-5.25'>
							Our CashmeReborn Collection uses cashmere yarn manufactured from recycled yarn spinning
							waste to cut down on material waste and advance circularity. Compared to cashmere generated
							from raw fiber, reborn cashmere requires 31% less energy, 13% less water, and 16% less
							product dye to produce.
						</p>
					</div>
					<Link
						href={'#'}
						className='text-sm underline underline-offset-6'
					>
						Learn More
					</Link>
				</div>
			</div>
		</section>
	);
}

import Image from 'next/image';
import Link from 'next/link';

import IconArrowDown from '@/components/assets/arrow-down';
import IconHeart from '@/components/assets/heart';
import IconInfo from '@/components/assets/info';
import IconStar from '@/components/assets/star';
import ProductCarousel from '@/components/features/product-carousel';
import Bagde from '@/components/ui/badge';

import { formatCurrency } from '@/lib/utils';
import { PRODUCT_OVERVIEW } from '@/lib/constants';
import ProductSizes from '@/components/features/product-sizes';
import ProductColors from '@/components/features/product-colors';
import Button from '@/components/ui/button';
import IconFitFinder from '@/components/assets/fit-finder';

export default function ProductOverview() {
	const { name, originalPrice, currentPrice, sale, sizes, colors, images } = PRODUCT_OVERVIEW;

	return (
		<section className='relative lg:grid lg:grid-cols-[64fr_36fr] lg:items-start'>
			<ProductCarousel images={images} />

			<div className='hidden lg:grid lg:grid-cols-2'>
				{images.map(({ path, alt }) => (
					<Image
						key={alt}
						src={path}
						alt={alt}
						width={1440}
						height={1920}
						className='aspect-3/4 object-cover'
					/>
				))}
			</div>

			<div className='space-y-5 p-5 lg:sticky lg:top-16 lg:px-10 lg:py-15'>
				<div className='space-y-5'>
					<div className='space-y-2.5'>
						<div className='flex items-center justify-between'>
							<p className='text-subdued text-xs lg:text-sm'>Women / The Organic Collection</p>
							<IconHeart className='hidden lg:block' />
						</div>
						<h1 className='text-2xl leading-9.5 lg:text-[2rem]'>{name}</h1>
					</div>
					<div className='space-y-2.5'>
						<div className='flex items-center gap-2.5'>
							<div className='flex items-center gap-1.5'>
								{Array.from({ length: 5 }).map((_, index) => (
									<IconStar
										key={index}
										className='text-graphite shrink-0'
									/>
								))}
							</div>
							<p className='text-xs'>6 reviews</p>
						</div>
						<div className='flex flex-wrap items-center gap-2.5 text-2xl'>
							<h1>{formatCurrency(currentPrice)}</h1>
							<h1 className='text-subdued line-through'>{formatCurrency(originalPrice)}</h1>
							<Bagde
								variant={'contrast'}
								size={'xl'}
							>
								{sale}%
							</Bagde>
						</div>
						<p className='text-subdued text-xs'>Inkl. MwSt. zzgl. Versandkosten</p>
						<div className='flex flex-wrap items-center gap-2.5'>
							<Bagde variant={'contrast'}>This is Promo</Bagde>
							<Bagde>
								<span>Text CashmeReborn</span>
								<IconArrowDown />
							</Bagde>
						</div>
					</div>
				</div>

				<ProductColors colors={colors} />

				<ProductSizes sizes={sizes} />

				<div className='space-y-2.5'>
					<Image
						src={'/assets/fit-finder.svg'}
						alt='Fit Finder'
						width={149}
						height={29}
					/>

					<Button
						variant={'outline'}
						size={'lg'}
					>
						<IconFitFinder />
						<span className='text-sm'>Find your size</span>
					</Button>
				</div>

				<p className='text-subdued text-center text-xs lg:text-sm'>Only 2 left</p>

				<Button className='w-full'>Add To Bag</Button>

				<div className='space-y-5'>
					<div className='text-subdued space-x-2.5 text-xs'>
						<span>Pay within 30 days</span>
						<button className='rounded-full bg-[#FFC0CB] px-3 py-2'>
							<Image
								src={'/assets/klarna-logo.svg'}
								alt={'Klarna'}
								width={45}
								height={11}
							/>
						</button>
						<span>No fees.</span>
						<Link
							href={'#'}
							className='underline lg:text-sm'
						>
							Learn More
						</Link>
					</div>
					<div className='space-y-2.5'>
						<p className='text-subdued text-xs'>
							or <span className='text-graphite'>4</span> interest-free payments of{' '}
							<span className='text-graphite'>$ 43.35</span> with
						</p>
						<div className='flex items-center gap-2.5'>
							<button
								type='button'
								className='rounded-full bg-[#B2FCE4] px-3 py-1.5'
							>
								<Image
									src={'/assets/afterpay-logo.svg'}
									alt={'Afterpay'}
									width={73}
									height={15}
								/>
							</button>
							<button type='button'>
								<IconInfo />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

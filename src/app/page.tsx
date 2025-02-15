import Bagde from '@/components/ui/badge';
import { PRODUCT_COLORS, PRODUCT_GRID_GALLERY, PRODUCT_SIZES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { GoatGray, GoatWhite } from '@/components/assets/goat';

export default function Home() {
	return (
		<>
			<div className='p-5 space-y-5'>
				<section className='space-y-5'>
					<div className='space-y-2.5'>
						<p className='text-xs text-subdued'>Women / The Organic Collection</p>
						<h1 className='text-2xl'>Turtle Neck with Cable Stitches</h1>
					</div>
					<div className='space-y-2.5'>
						<div className='flex items-center gap-2.5'>
							<div className='flex items-center gap-1.5'>
								{Array.from({ length: 5 }).map((_, index) => (
									<IconStar
										key={index}
										className='fill-current'
									/>
								))}
							</div>
							<p className='text-xs'>6 reviews</p>
						</div>
						<div className='flex items-center flex-wrap gap-2.5 text-2xl'>
							<h1>$49.99</h1>
							<h1 className='text-subdued line-through'>$149.99</h1>
							<div className='rounded-sm py-0.5 px-2 bg-lime'>-40%</div>
						</div>
						<p className='text-subdued text-xs'>Inkl. MwSt. zzgl. Versandkosten</p>
						<div className='flex items-center gap-2.5 flex-wrap'>
							<Bagde variant={'contrast'}>This is Promo</Bagde>
							<Bagde>
								<span>Text CashmeReborn</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-4'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3'
									/>
								</svg>
							</Bagde>
						</div>
					</div>
				</section>

				<section className='space-y-5'>
					<div className='space-y-2.5'>
						<p className='text-xs'>
							<span className='text-subdued'>Color:</span> Seafoam
						</p>
						<div className='grid grid-cols-[repeat(auto-fit,1.625rem)] gap-3 [&_div]:aspect-square'>
							{PRODUCT_COLORS.map((color, index) => (
								<div
									key={index}
									className='grid place-content-center'
								>
									<div
										style={{ backgroundColor: color }}
										className='size-[1.125rem] rounded-full'
									/>
								</div>
							))}
						</div>
					</div>

					<div className='space-y-3.5'>
						<div className='flex items-center justify-between text-xs'>
							<p>Select a size</p>
							<div className='space-x-5'>
								<button className='underline underline-offset-[6px]'>Find My Size</button>
								<button className='underline underline-offset-[6px]'>Size Guide</button>
							</div>
						</div>
						<div className='grid grid-cols-[repeat(auto-fit,45px)] gap-[13px]'>
							{PRODUCT_SIZES.map(size => (
								<button
									key={size}
									className='h-10 flex items-center justify-center uppercase text-xs rounded-sm border border-warm-tone-4 hover:border-graphite transition'
								>
									{size}
								</button>
							))}
						</div>
					</div>
				</section>

				<p className='text-subdued text-xs text-center'>Only 2 left</p>

				<button className='py-2.5 px-5 rounded-sm bg-graphite text-white w-full text-xs'>Add To Bag</button>

				<section className='space-y-5'>
					<div className='text-xs text-subdued space-x-2.5'>
						<span>Pay within 30 days</span>
						<button className='rounded-full px-3 py-2 bg-[#FFC0CB]'>
							<Image
								src={'/assets/klarna-logo.svg'}
								alt={'klarna'}
								width={44}
								height={10}
							/>
						</button>
						<span>No fees.</span>
						<Link
							href={'#'}
							className='underline'
						>
							Learn More
						</Link>
					</div>
					<div className='space-y-2.5'>
						<p className='text-xs text-subdued'>
							or <span className='text-graphite'>4</span> interest-free payments of{' '}
							<span className='text-graphite'>$ 43.35</span> with
						</p>
						<div className='flex items-center gap-2.5'>
							<button
								type='button'
								className='rounded-full px-3 py-1.5 bg-[#B2FCE4]'
							>
								<Image
									src={'/assets/afterpay-logo.svg'}
									alt={'klarna'}
									width={72}
									height={14}
								/>
							</button>
							<button type='button'>
								<Image
									src={'/icons/info.svg'}
									alt='info_icon'
									width={12}
									height={18}
								/>
							</button>
						</div>
					</div>
				</section>
			</div>

			<div className='py-[3.75rem] px-5 grid gap-10'>
				<div className='space-y-2.5'>
					<p className='uppercase text-xs'>Description</p>
					<h1 className='text-2xl'>
						This turtle neck sweater has a relaxed fit and timeless color. An engaging design twist has been
						applied with asymmetric stitch details. Elegant yet classic and trendy with its own design
						feature. This piece can be tucked into everything from tailoring to faded jeans or a leather
						midi skirt.
					</h1>
				</div>
				<div className='space-y-10'>
					<div className='space-y-2.5 text-xs'>
						<p className='uppercase'>Details</p>
						<ul className='list-dashed'>
							<li>T-neck</li>
							<li>100% Mongolian cashmere</li>
							<li>525 grams</li>
							<li>8 ply</li>
							<li>3.5 gauge</li>
							<li>Cable and fisherman rib stitches</li>
							<li>Loose fit </li>
						</ul>
					</div>
					<div className='space-y-2.5 text-xs'>
						<p className='uppercase'>Organic Cashmere</p>
						<ul className='list-dashed'>
							<li>Made with 100% organic cashmere</li>
							<li>Certified by SFA</li>
							<li>
								GOBI Organic collection uses 100% organic cashmere with no dyes and bleaches, keeping
								the 4 natural colors of cashmere fiber
							</li>
						</ul>
					</div>
					<div className='space-y-2.5 text-xs'>
						<p className='uppercase'>Shipping Information</p>
						<ul className='list-dashed'>
							<li>Standard shipping rate: Starting from $7.90</li>
							<li>Delivery time: 1 - 3 business days.</li>
							<li>
								The shipping rate and delivery time apply for US only. For other information please see
								Shipping Policy
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='grid'>
				{PRODUCT_GRID_GALLERY.map(({ label, description, imagePath }, index) => (
					<div key={index}>
						<Image
							src={imagePath}
							alt='product-image'
							width={1440}
							height={1920}
						/>
						<div className='pt-5 px-5 pb-10 space-y-4'>
							<h3 className='text-2xl'>{label}</h3>
							<p className='text-sm'>{description}</p>
						</div>
					</div>
				))}
			</div>

			<div className='grid grid-cols-2 [&>*]:aspect-3/4'>
				<div className='bg-[url(/images/bayanhongor-province.jpeg)] bg-cover bg-center bg-graphite/25 bg-blend-multiply flex flex-col justify-center items-center gap-10 p-5 text-white'>
					<div className='text-center'>
						<p className='uppercase text-xs'>Sourced from</p>
						<p className='text-lg'>Bayanhongor Province</p>
					</div>
					<Link
						href={'#'}
						className='underline underline-offset-[6px]'
					>
						Learn More
					</Link>
				</div>
				<div className='bg-warm-tone-4 flex flex-col justify-center items-center gap-10 p-5'>
					<div className='text-lg text-center max-w-30'>
						<span>Cashmere from</span>
						<GoatGray className='w-6 h-7 inline-block mx-1.25' />
						<span>and</span>
						<GoatWhite className='w-6 h-7 inline-block mx-1.25' />
						<span>goats</span>
					</div>
					<Link
						href={'#'}
						className='underline underline-offset-[6px]'
					>
						Learn More
					</Link>
				</div>
				<div className='bg-[url(/images/sweater.jpeg)] bg-[55%_45%] bg-[length:350%] bg-white/20 bg-blend-multiply p-5 flex items-center justify-center'>
					<p className='text-sm max-w-28 text-center'>The softest lightweight cashmere at 13 microns</p>
				</div>
				<div className='bg-lime flex items-center justify-center text-center'>
					<div>
						<h1 className='text-[2rem]'>100%</h1>
						<p className='text-sm'>Cashmere</p>
					</div>
				</div>
				<div className='p-5 space-y-5 bg-warm-tone-4'>
					<p className='uppercase text-xs'>The Process</p>
					<ul className='space-y-2.5 text-lg'>
						<ol>1 Washing</ol>
						<ol>2 Yarns</ol>
						<ol>3 Knitting</ol>
					</ul>
				</div>
				<Image
					src={'/images/knitting-factory.webp'}
					alt='Knitting Factory'
					width={1440}
					height={1920}
					className='object-cover object-center w-full h-full'
				/>
			</div>

			<div className='relative'>
				<Image
					src={'/images/reborn-cashmere.jpeg'}
					alt='Reborn Cashmere'
					width={2160}
					height={1440}
					className='h-[735px] object-cover object-center'
				/>
				<div className='absolute top-1/5 inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-graphite/60' />
				<div className='absolute inset-x-0 bottom-0 space-y-5 text-white py-7.5 px-5'>
					<div className='space-y-2.5'>
						<h1 className='text-[2rem]'>Reborn Cashmere</h1>
						<p>
							Our CashmeReborn Collection uses cashmere yarn manufactured from recycled yarn spinning
							waste to cut down on material waste and advance circularity. Compared to cashmere generated
							from raw fiber, reborn cashmere requires 31% less energy, 13% less water, and 16% less
							product dye to produce.
						</p>
					</div>
					<Link
						href={'#'}
						className='underline underline-offset-6 '
					>
						Learn More
					</Link>
				</div>
			</div>

			<section className='pt-5 px-5 pb-10 grid gap-10 place-items-center [&>*]:not-last:w-full'>
				<div className='space-y-3.75'>
					<div className='flex items-center justify-between'>
						<h2 className='text-2xl'>Customer Reviews</h2>
						<button className='underline underline-offset-6 text-xs cursor-pointer'>Write a Review</button>
					</div>
					<div className='flex items-center gap-2.5'>
						<div className='flex items-center gap-1.75'>
							{Array.from({ length: 5 }).map((_, index) => (
								<IconStar
									key={index}
									className='fill-current'
								/>
							))}
						</div>
						<p className='text-sm'>Based on 6 reviews</p>
					</div>
					<hr className='border-t-warm-tone-4 w-full border-t' />
				</div>

				{Array.from({ length: 3 }).map((_, index) => (
					<div
						key={index}
						className='space-y-3.5 pb-7.5 border-b border-b-warm-tone-4'
					>
						<div className='flex items-center justify-between text-xs'>
							<p>Autumn D.</p>
							<p>04/27/19</p>
						</div>

						<div className='flex items-center gap-1.75'>
							{Array.from({ length: 5 }).map((_, index) => (
								<IconStar
									key={index}
									className='fill-current'
								/>
							))}
						</div>

						<h5 className='text-lg'>Amazing and unique!</h5>

						<p className='text-xs'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				))}

				<button className='py-4 px-5 rounded bg-graphite text-white text-xs whitespace-nowrap'>
					Load More
				</button>
			</section>

			<section className='bg-warm-tone-3'>
				<div className='py-10 px-5 space-y-2.5 text-xs'>
					<h3 className='text-2xl'>Take comfort in traceable affordable exquisite quality</h3>
					<p>
						Our standards for our cashmere are as high as they come with a focus on accessibility
						responsibility and traceability.
					</p>
					<Link
						href={'#'}
						className='underline underline-offset-6'
					>
						Learn More
					</Link>
				</div>

				<div>
					<Image
						src={'/images/rotated-sweater.png'}
						alt='Sweater'
						width={1440}
						height={1440}
						className='aspect-square'
					/>
					<div className='pt-2.5 px-5 pb-10'>
						<h5 className='text-lg'>Affordable luxury</h5>
					</div>
				</div>

				<div>
					<Image
						src={'/images/group-of-models.png'}
						alt='Group of Models'
						width={1440}
						height={1440}
						className='aspect-square'
					/>
					<div className='pt-2.5 px-5 pb-10'>
						<h5 className='text-lg'>Premium quality</h5>
					</div>
				</div>

				<div>
					<Image
						src={'/images/mountains.png'}
						alt='Mountains'
						width={1440}
						height={1440}
						className='aspect-square'
					/>
					<div className='pt-2.5 px-5 pb-10'>
						<h5 className='text-lg'>Locally Made in Mongolia</h5>
					</div>
				</div>
			</section>
		</>
	);
}

function IconStar({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={cn('size-5', className)}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
			/>
		</svg>
	);
}

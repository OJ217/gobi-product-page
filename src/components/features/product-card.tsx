import Image from 'next/image';

import IconHeart from '@/components/assets/heart';
import { Product } from '@/types';

export default function ProductCard({ imagePath, name, price, colors }: Product) {
	return (
		<div>
			<Image
				src={imagePath}
				alt={name}
				width={1440}
				height={1920}
				className='aspect-3/4 object-cover'
			/>
			<div className='pt-2.5 px-2.5 pb-5 space-y-2 lg:px-5'>
				<div className='text-xs lg:text-sm flex flex-col gap-0.5 lg:flex-row lg:justify-between'>
					<p>{name}</p>
					<p>
						{Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD',
						}).format(price)}
					</p>
				</div>
				<div className='grid grid-cols-[repeat(auto-fit,14px)] gap-2'>
					{colors.map(({ code, label }) => (
						<div
							key={label}
							style={{ backgroundColor: code }}
							className='rounded-full size-3.5'
						/>
					))}
				</div>
			</div>
			<button className='absolute top-5 right-5 z-10'>
				<IconHeart className='size-6' />
			</button>
			<div className='absolute left-2.5 top-2.5 z-10 py-2.5 px-3.75 rounded bg-white uppercase'>
				<p className='text-sm'>New</p>
			</div>
		</div>
	);
}

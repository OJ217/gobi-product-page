import Image from 'next/image';

import IconHeart from '@/components/assets/heart';
import Bagde from '@/components/ui/badge';

import { formatCurrency } from '@/lib/utils';

import { IProduct } from '@/types';

export default function ProductCard({ imagePath, name, price, colors, className }: IProduct & { className?: string }) {
	return (
		<div className={className}>
			<Image
				src={imagePath}
				alt={name}
				width={1440}
				height={1920}
				className='aspect-3/4 object-cover'
			/>
			<div className='space-y-2 px-2.5 pt-2.5 pb-5 lg:px-5'>
				<div className='flex flex-col gap-0.5 text-xs lg:flex-row lg:justify-between lg:text-sm'>
					<p>{name}</p>
					<p>{formatCurrency(price)}</p>
				</div>
				<div className='grid grid-cols-[repeat(auto-fit,_14px)] gap-2'>
					{colors.map(({ code, label }) => (
						<div
							key={label}
							style={{ backgroundColor: code }}
							className='size-3.5 rounded-full'
						/>
					))}
				</div>
			</div>
			<button className='absolute top-5 right-5 z-10'>
				<IconHeart className='size-6' />
			</button>

			<Bagde
				padding={'md'}
				variant={'light'}
				className='absolute top-2.5 left-2.5 z-10 text-sm uppercase'
			>
				New
			</Bagde>
		</div>
	);
}

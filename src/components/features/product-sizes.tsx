'use client';

import { useState } from 'react';

import Button from '@/components/ui/button';

import { cn } from '@/lib/utils';

export default function ProductSizes({ sizes }: { sizes: string[] }) {
	const [selectedSize, setSelectedSize] = useState<string>();

	return (
		<div className='space-y-3.5'>
			<div className='flex items-center justify-between text-xs lg:text-sm'>
				<p>Select a size</p>
				<div className='space-x-5'>
					<button className='underline underline-offset-[6px]'>Find My Size</button>
					<button className='underline underline-offset-[6px]'>Size Guide</button>
				</div>
			</div>
			<div className='grid grid-cols-[repeat(auto-fit,_45px)] gap-[13px] lg:grid-cols-[repeat(auto-fit,60px)]'>
				{sizes.map(size => (
					<Button
						key={size}
						variant={'outline'}
						onClick={() => setSelectedSize(size)}
						className={cn('h-10 uppercase', {
							'border-graphite': selectedSize === size,
						})}
					>
						{size}
					</Button>
				))}
			</div>
		</div>
	);
}

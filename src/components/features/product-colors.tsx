'use client';

import { useState } from 'react';

import { IColor } from '@/types';
import { cn } from '@/lib/utils';

export default function ProductColors({ colors }: { colors: IColor[] }) {
	const [selectedColor, setSelectColor] = useState<IColor & { index: number }>({
		...colors[0],
		index: 0,
	});

	return (
		<div className='space-y-2.5'>
			<p className='text-xs lg:text-sm'>
				<span className='text-subdued'>Color:</span> {selectedColor.label}
			</p>
			<div className='grid grid-cols-[repeat(auto-fit,_1.625rem)] gap-3 [&_div]:aspect-square'>
				{colors.map((color, index) => (
					<button
						key={index}
						type='button'
						onClick={() => setSelectColor({ ...color, index })}
						className={cn(
							'grid aspect-square place-content-center rounded-full border border-transparent transition outline-none',
							{
								'border-graphite': selectedColor.index === index,
								'focus-within:border-warm-tone-4': selectedColor.index !== index,
							}
						)}
					>
						<div
							aria-label={color.label}
							style={{ backgroundColor: color.code }}
							className='size-[1.125rem] rounded-full'
						/>
					</button>
				))}
			</div>
		</div>
	);
}

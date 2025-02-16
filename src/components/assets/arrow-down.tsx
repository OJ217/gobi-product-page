import { cn } from '@/lib/utils';
import React from 'react';

export default function IconArrowDown({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={cn('size-4', className)}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3'
			/>
		</svg>
	);
}

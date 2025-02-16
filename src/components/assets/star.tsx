import { cn } from '@/lib/utils';
import React from 'react';

export default function IconStar({ className }: { className?: string }) {
	return (
		<svg
			width='24'
			height='23'
			viewBox='0 0 24 23'
			fill='none'
			role='img'
			xmlns='http://www.w3.org/2000/svg'
			aria-label='Star Outline'
			className={cn('size-3.5 text-subdued', className)}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12 18.324L19.416 22.8L17.448 14.364L24 8.688L15.372 7.956L12 0L8.628 7.956L0 8.688L6.552 14.364L4.584 22.8L12 18.324Z'
				fill='currentColor'
			></path>
		</svg>
	);
}

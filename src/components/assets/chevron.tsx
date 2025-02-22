import { cn } from '@/lib/utils';

export function IconChevronRight({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={cn('size-3.5', className)}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='m8.25 4.5 7.5 7.5-7.5 7.5'
			/>
		</svg>
	);
}

export function IconChevronLeft({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={cn('size-3.5', className)}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M15.75 19.5 8.25 12l7.5-7.5'
			/>
		</svg>
	);
}

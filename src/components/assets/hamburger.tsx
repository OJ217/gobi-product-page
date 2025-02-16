import { cn } from '@/lib/utils';

export default function IconHamburger({ className }: { className?: string }) {
	return (
		<svg
			width='100%'
			height='100%'
			viewBox='0 0 24 24'
			role='img'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-labelledby='Hamburger Menu'
			className={cn('size-6', className)}
		>
			<path
				d='M0 6H24'
				stroke='currentColor'
			></path>
			<path
				d='M0 12H24'
				stroke='currentColor'
			></path>
			<path
				d='M0 18H24'
				stroke='currentColor'
			></path>
		</svg>
	);
}

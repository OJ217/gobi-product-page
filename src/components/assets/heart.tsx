import { cn } from '@/lib/utils';

export default function IconHeart({ className }: { className?: string }) {
	return (
		<svg
			width='100%'
			height='100%'
			viewBox='0 0 24 22'
			fill='none'
			role='img'
			xmlns='http://www.w3.org/2000/svg'
			aria-labelledby='Heart'
			className={cn('size-6', className)}
		>
			<path
				d='M2.41447 11.46L2.40878 11.4544L2.40419 11.4502C-0.136587 8.94345 -0.134729 4.88741 2.40976 2.38296L2.40984 2.38289C4.95942 -0.12763 9.09844 -0.12763 11.648 2.38289L11.9987 2.72818L12.3495 2.38304C14.9015 -0.127762 19.0407 -0.127548 21.5902 2.38289L21.5902 2.38296C24.1361 4.88875 24.1366 8.94778 21.5917 11.4542C21.5912 11.4547 21.5907 11.4552 21.5902 11.4556L21.5149 11.5285L21.5149 11.5285L21.5117 11.5316L12 20.8957L2.41447 11.46Z'
				stroke='currentColor'
			></path>
		</svg>
	);
}

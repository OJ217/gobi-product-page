import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const badgeVariants = cva('rounded inline-flex justify-center items-center gap-0.5 whitespace-nowrap', {
	variants: {
		variant: {
			default: 'bg-graphite text-light',
			contrast: 'bg-lime',
			light: 'bg-white',
		},
		size: {
			xs: 'text-xs',
			xl: 'text-2xl',
		},
		padding: {
			xs: 'py-0.5 px-2',
			md: 'py-2.5 px-3.75',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'xs',
		padding: 'xs',
	},
});

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export default function Bagde({ variant, size, padding, children, className, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, size, padding, className }))}
			{...props}
		>
			{children}
		</div>
	);
}

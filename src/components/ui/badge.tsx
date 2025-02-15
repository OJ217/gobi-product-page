import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const badgeVariants = cva('py-0.5 px-2 rounded-sm inline-flex justify-center items-center gap-0.5 whitespace-nowrap', {
	variants: {
		variant: {
			default: 'bg-graphite text-light',
			contrast: 'bg-lime',
		},
		size: {
			xs: 'text-xs',
			xl: 'text-2xl',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'xs',
	},
});

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export default function Bagde({ variant, size, children, className, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, size, className }))}
			{...props}
		>
			{children}
		</div>
	);
}

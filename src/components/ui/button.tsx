import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
	'rounded text-xs lg:text-sm whitespace-nowrap inline-flex justify-center items-center gap-2 transition',
	{
		variants: {
			variant: {
				primary: 'bg-graphite text-white',
				outline: 'bg-transparent border border-warm-tone-4 hover:border-graphite',
			},
			size: {
				md: 'px-5 py-2.5',
				lg: 'px-6 py-3',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	}
);

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export default function Button({ variant, size, children, className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			{children}
		</button>
	);
}

import { cn } from '@/lib/utils';

export default function IconSearch({ className }: { className?: string }) {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 25 24'
			fill='none'
			role='img'
			xmlns='http://www.w3.org/2000/svg'
			aria-label='Search'
			className={cn('size-6', className)}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M11.8086 17.1143C15.1223 17.1143 17.8086 14.428 17.8086 11.1143C17.8086 7.80055 15.1223 5.11426 11.8086 5.11426C8.49489 5.11426 5.80859 7.80055 5.80859 11.1143C5.80859 14.428 8.49489 17.1143 11.8086 17.1143ZM11.8086 18.1143C15.6746 18.1143 18.8086 14.9803 18.8086 11.1143C18.8086 7.24826 15.6746 4.11426 11.8086 4.11426C7.9426 4.11426 4.80859 7.24826 4.80859 11.1143C4.80859 14.9803 7.9426 18.1143 11.8086 18.1143Z'
				fill='currentColor'
			></path>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M16.1953 15.4971C16.3905 15.3018 16.7071 15.3018 16.9024 15.4971L20.4379 19.0326C20.6332 19.2279 20.6332 19.5445 20.4379 19.7397C20.2427 19.935 19.9261 19.935 19.7308 19.7397L16.1953 16.2042C16 16.009 16 15.6924 16.1953 15.4971Z'
				fill='currentColor'
			></path>
		</svg>
	);
}

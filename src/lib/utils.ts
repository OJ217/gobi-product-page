import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const formatDate = (date: Date) => {
	return new Date(date).toLocaleDateString('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit',
	});
};

export const formatCurrency = (value: number) => {
	return Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(value);
};

import Image from 'next/image';

import { cn } from '@/lib/utils';

import { PRODUCT_FEATURES } from '@/lib/constants';

export default function ProductFeatures() {
	return (
		<section>
			{PRODUCT_FEATURES.map(({ label, description, imagePath }, index) => {
				const isEvenRow = (index + 1) % 2 == 0;
				return (
					<div
						key={index}
						className='lg:grid lg:grid-cols-2'
					>
						<Image
							src={imagePath}
							alt='Product Image'
							width={1440}
							height={1920}
						/>
						<div
							className={cn('space-y-4 px-5 pt-5 pb-10 lg:py-25', {
								'lg:row-start-1 lg:pr-10 lg:pl-25': isEvenRow,
								'lg:pr-25 lg:pl-10': !isEvenRow,
							})}
						>
							<h3 className='text-2xl'>{label}</h3>
							<p className='text-sm'>{description}</p>
						</div>
					</div>
				);
			})}
		</section>
	);
}

'use client';

import useEmblaCarousel from 'embla-carousel-react';

import { IconChevronLeft, IconChevronRight } from '@/components/assets/chevron';
import ProductCard from '@/components/features/product-card';

import { RECOMMENDATIONS } from '@/lib/constants';

export default function Recommendations() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

	const handlePrevClick = () => {
		if (!emblaApi) {
			return;
		}
		emblaApi.scrollPrev();
	};

	const handleNextClick = () => {
		if (!emblaApi) {
			return;
		}
		emblaApi.scrollNext();
	};

	return (
		<section className='bg-warm-tone-3 space-y-10 py-15'>
			<div className='px-5 lg:px-10'>
				<h3 className='text-[2rem] lg:text-[4rem]'>We recommend</h3>
				<div className='mt-5 flex items-center lg:hidden'>
					<button
						onClick={handlePrevClick}
						className='border-graphite grid aspect-square size-11 place-content-center rounded-l border-y border-l'
					>
						<IconChevronLeft />
					</button>
					<button
						onClick={handleNextClick}
						className='border-graphite grid aspect-square size-11 place-content-center rounded-r border'
					>
						<IconChevronRight />
					</button>
				</div>
			</div>

			<div
				className='overflow-hidden'
				ref={emblaRef}
			>
				<div className='flex'>
					{RECOMMENDATIONS.map((product, index) => (
						<ProductCard
							key={index}
							className='relative min-w-0 flex-[0_0_50%] lg:flex-[0_0_25%]'
							{...product}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

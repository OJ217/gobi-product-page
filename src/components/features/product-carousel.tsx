'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';

import IconHeart from '@/components/assets/heart';

import { cn } from '@/lib/utils';

import { IProductOverview } from '@/types';

export default function ProductCarousel({ images }: { images: IProductOverview['images'] }) {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const handleNavigation = useCallback(
		(index: number) => {
			if (!emblaApi) {
				return;
			}
			emblaApi.scrollTo(index);
		},
		[emblaApi]
	);

	const onSelect = useCallback((emblaApi: UseEmblaCarouselType['1']) => {
		setActiveIndex(emblaApi!.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		emblaApi.on('reInit', onSelect).on('select', onSelect);
	}, [emblaApi, onSelect]);

	return (
		<div
			ref={emblaRef}
			className='relative overflow-hidden lg:hidden'
		>
			<div className='flex'>
				{images.map(({ path, alt }) => (
					<div
						key={alt}
						className='relative min-w-0 flex-[0_0_100%]'
					>
						<Image
							priority
							src={path}
							alt={alt}
							width={1440}
							height={1920}
							className='aspect-3/4 object-cover'
						/>
						<button className='absolute top-5 right-5 z-10'>
							<IconHeart className='size-6' />
						</button>
					</div>
				))}
			</div>
			<div className='absolute inset-x-0 bottom-5 flex items-center justify-center gap-2.5'>
				{Array.from({ length: images.length }).map((_, index) => (
					<button
						key={index}
						onClick={() => handleNavigation(index)}
						className={cn('bg-subdued size-2 rounded-full', { 'bg-graphite': activeIndex === index })}
					/>
				))}
			</div>
		</div>
	);
}

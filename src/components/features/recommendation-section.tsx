'use client';

import { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { IconChevronLeft, IconChevronRight } from '@/components/assets/chevron';
import ProductCard from '@/components/features/product-card';
import { RECOMMENDATION_CAROUSEL } from '@/lib/constants';

export default function RecommendationSection() {
	const [swiper, setSwiper] = useState<SwiperClass | null>(null);

	return (
		<section className='py-15 bg-warm-tone-3 space-y-10'>
			<div className='px-5 lg:px-10'>
				<h3 className='text-[2rem] lg:text-[4rem]'>We recommend</h3>
				<div className='flex items-center mt-5 lg:hidden'>
					<button
						className='aspect-square size-11 border-y border-l border-graphite rounded-l grid place-content-center'
						onClick={() => {
							if (swiper !== null) {
								swiper.slidePrev();
							}
						}}
					>
						<IconChevronLeft />
					</button>
					<button
						className='aspect-square size-11 border border-graphite rounded-r grid place-content-center'
						onClick={() => {
							if (swiper !== null) {
								swiper.slideNext();
							}
						}}
					>
						<IconChevronRight />
					</button>
				</div>
			</div>

			<Swiper
				onSwiper={setSwiper}
				slidesPerView={2}
				breakpoints={{
					1024: {
						slidesPerView: 4,
					},
				}}
			>
				{RECOMMENDATION_CAROUSEL.map((product, index) => (
					<SwiperSlide key={index}>
						<ProductCard {...product} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

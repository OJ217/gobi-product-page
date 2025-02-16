'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconHeart from '@/components/assets/heart';
import { PRODUCT_CAROUSEL } from '@/lib/constants';

export default function ProductSlide({ className }: { className?: string }) {
	return (
		<Swiper
			slidesPerView={1}
			modules={[Pagination]}
			pagination={{
				clickable: true,
				bulletActiveClass: '!bg-graphite',
				bulletClass: 'bg-subdued size-2 mx-1.25 rounded-full inline-block cursor-pointer',
			}}
			className={className}
		>
			{PRODUCT_CAROUSEL.map(({ imagePath, label }) => (
				<SwiperSlide
					key={label}
					className='relative'
				>
					<Image
						src={imagePath}
						alt={label}
						width={1000}
						height={750}
						className='aspect-3/4 object-cover'
					/>
					<button className='absolute top-5 right-5 z-10'>
						<IconHeart className='size-6' />
					</button>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

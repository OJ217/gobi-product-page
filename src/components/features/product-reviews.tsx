import IconStar from '@/components/assets/star';
import Button from '@/components/ui/button';

import { PRODUCT_REVIEWS } from '@/lib/constants';
import { formatDate } from '@/lib/utils';

export default function ProductReviews() {
	const { meta, docs } = PRODUCT_REVIEWS;

	return (
		<section className='grid place-items-center gap-10 px-5 pt-5 pb-10 lg:mx-auto lg:max-w-185 lg:px-10 lg:pt-17.5 [&>*]:not-last:w-full'>
			<div className='space-y-3.75'>
				<div className='flex items-center justify-between'>
					<h2 className='text-2xl lg:text-[2rem]'>Customer Reviews</h2>
					<button className='cursor-pointer text-xs underline underline-offset-6 lg:text-sm'>
						Write a Review
					</button>
				</div>
				<div className='flex items-center gap-2.5'>
					<div className='flex items-center gap-1.75'>
						{Array.from({ length: 5 }).map((_, index) => (
							<IconStar
								key={index}
								className='text-graphite'
							/>
						))}
					</div>
					<p className='text-sm lg:text-base'>Based on {meta.totalReviews} reviews</p>
				</div>
				<hr className='border-t-warm-tone-4 w-full border-t' />
			</div>

			{docs.map(({ author, title, content, date }, index) => (
				<div
					key={index}
					className='border-b-warm-tone-4 space-y-3.5 border-b pb-7.5'
				>
					<div className='flex items-center justify-between text-xs lg:text-sm'>
						<p>{author}</p>
						<p>{formatDate(date)}</p>
					</div>
					<div className='flex items-center gap-1.75'>
						{Array.from({ length: 5 }).map((_, index) => (
							<IconStar
								key={index}
								className='text-graphite'
							/>
						))}
					</div>
					<h5 className='text-lg lg:text-2xl'>{title}</h5>
					<p className='text-xs lg:text-sm'>{content}</p>
				</div>
			))}

			<Button className='py-4'>Load More</Button>
		</section>
	);
}

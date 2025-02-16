import { PRODUCT_DETAILS } from '@/lib/constants';

export default function ProductDetails() {
	return (
		<section className='grid gap-10 px-5 py-[3.75rem] md:grid-cols-[16fr_9fr] md:px-10 md:py-20'>
			<div className='space-y-2.5'>
				<p className='text-xs uppercase'>Description</p>
				<h1 className='text-2xl lg:text-[2rem]'>{PRODUCT_DETAILS.description}</h1>
			</div>
			<div className='space-y-10'>
				{PRODUCT_DETAILS.sections.map(({ label, contents }) => (
					<div
						key={label}
						className='space-y-2.5 text-xs'
					>
						<p className='uppercase'>{label}</p>
						<ul className='list-dashed lg:text-sm'>
							{contents.map((c, i) => (
								<li key={i}>{c}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}

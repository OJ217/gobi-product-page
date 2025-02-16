export const NAVIGATION_LINKS: { label: string }[] = [
	{ label: 'Women' },
	{ label: 'Men' },
	{ label: 'Accessories' },
	{ label: 'Home' },
	{ label: 'Gifts' },
	{ label: 'Sale' },
	{ label: 'About Us' },
];

export const PRODUCT_COLORS = [
	'#3467C2',
	'#713A41',
	'#EED34E',
	'#8C8B7D',
	'#3B8589',
	'#AAC584',
	'#EDEAB8',
	'#383D4D',
	'#A5B4CD',
	'#3467C2',
	'#713A41',
	'#EED34E',
	'#8C8B7D',
	'#3B8589',
];

export const PRODUCT_SIZES = ['xs', 's', 'm', 'l', 'xl', '2xl'];

export const PRODUCT_GRID_GALLERY: { label: string; description: string; imagePath: string }[] = [
	{
		label: 'Premium Look and Feel',
		description:
			'Good design goes with everything. From work to play, these sneakers are designed to seamlessly integrate into your everyday life.',
		imagePath: '/images/product-grid-1.jpeg',
	},
	{
		label: 'Innovative Natural Materials',
		description: 'Uppers made from finely spun and highly durable FELTON cashmere.',
		imagePath: '/images/product-grid-2.jpeg',
	},
	{
		label: 'Tried-and-Tested Comfort',
		description:
			'Mongolian cashmere is renowned for being lightweight, comfy and exceptionally soft. The insoles will adapt to your feet over time, making these sneakers so easy to wear.',
		imagePath: '/images/product-grid-3.jpeg',
	},
	{
		label: 'Breathable, Warm and Moisture-Wicking',
		description:
			'Designed to take advantage of the natural temperature-regulating properties of its cashmere uppers and wool lining for a first-rate walking experience.',
		imagePath: '/images/product-grid-4.jpeg',
	},
	{
		label: 'Better for the Environment and You',
		description:
			'Thick polyurethane insoles and EVA outsoles containing 15% algae and 20% sugarcane to keep sustainability at the forefront of everything we do.',
		imagePath: '/images/product-grid-5.jpeg',
	},
];

export const PRODUCT_CAROUSEL: { imagePath: string; label: string }[] = [
	{
		imagePath: '/images/product-carousel-1.png',
		label: 'Front View',
	},
	{
		imagePath: '/images/product-carousel-2.png',
		label: 'Side View',
	},
	{
		imagePath: '/images/product-carousel-3.png',
		label: 'Back View',
	},
	{
		imagePath: '/images/product-carousel-4.png',
		label: 'Top View',
	},
	{
		imagePath: '/images/product-carousel-5.png',
		label: 'Bottom View',
	},
];

export const RECOMMENDATION_CAROUSEL: {
	imagePath: string;
	name: string;
	price: number;
	colors: { code: string; label: string }[];
}[] = [
	{
		imagePath: '/images/recommendation.png',
		name: 'Turtle Neck with Cable Stitches',
		price: 49.99,
		colors: [
			{ code: '#C1E0D8', label: 'light-mint' },
			{ code: '#A16D5F', label: 'dusty-brown' },
			{ code: '#E1B2CE', label: 'pale-lavender' },
			{ code: '#788C94', label: 'slate-blue' },
		],
	},
	{
		imagePath: '/images/recommendation.png',
		name: 'Turtle Neck with Cable Stitches',
		price: 49.99,
		colors: [
			{ code: '#C1E0D8', label: 'light-mint' },
			{ code: '#A16D5F', label: 'dusty-brown' },
			{ code: '#E1B2CE', label: 'pale-lavender' },
			{ code: '#788C94', label: 'slate-blue' },
		],
	},
	{
		imagePath: '/images/recommendation.png',
		name: 'Turtle Neck with Cable Stitches',
		price: 49.99,
		colors: [
			{ code: '#C1E0D8', label: 'light-mint' },
			{ code: '#A16D5F', label: 'dusty-brown' },
			{ code: '#E1B2CE', label: 'pale-lavender' },
			{ code: '#788C94', label: 'slate-blue' },
		],
	},
	{
		imagePath: '/images/recommendation.png',
		name: 'Turtle Neck with Cable Stitches',
		price: 49.99,
		colors: [
			{ code: '#C1E0D8', label: 'light-mint' },
			{ code: '#A16D5F', label: 'dusty-brown' },
			{ code: '#E1B2CE', label: 'pale-lavender' },
			{ code: '#788C94', label: 'slate-blue' },
		],
	},
];

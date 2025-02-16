import {
	IProductDetails,
	IProductOrigin,
	IProductReviews,
	IProductOverview,
	ILink,
	IProductFeature,
	IProduct,
} from '@/types';

export const PRODUCT_OVERVIEW: IProductOverview = {
	category: ['Women', 'The Organic Collection'],
	name: 'Reborn Cashmere Turtle Neck with Cable Stitches',
	originalPrice: 289.0,
	currentPrice: 173.4,
	sale: -40,
	colors: [
		{ label: 'Blue', code: '#3467C2' },
		{ label: 'Dark Red', code: '#713A41' },
		{ label: 'Yellow', code: '#EED34E' },
		{ label: 'Gray', code: '#8C8B7D' },
		{ label: 'Teal', code: '#3B8589' },
		{ label: 'Green', code: '#AAC584' },
		{ label: 'Light Beige', code: '#EDEAB8' },
		{ label: 'Dark Gray', code: '#383D4D' },
		{ label: 'Light Blue', code: '#A5B4CD' },
		{ label: 'Blue', code: '#3467C2' },
		{ label: 'Dark Red', code: '#713A41' },
		{ label: 'Yellow', code: '#EED34E' },
		{ label: 'Gray', code: '#8C8B7D' },
		{ label: 'Teal', code: '#3B8589' },
	],
	sizes: ['xs', 's', 'm', 'l', 'xl', '2xl'],
	images: [
		{
			path: '/images/product-carousel-1.png',
			alt: 'Front View',
		},
		{
			path: '/images/product-carousel-2.png',
			alt: 'Side View',
		},
		{
			path: '/images/product-carousel-3.png',
			alt: 'Back View',
		},
		{
			path: '/images/product-carousel-4.png',
			alt: 'Top View',
		},
		{
			path: '/images/product-carousel-5.png',
			alt: 'Bottom View',
		},
	],
};

export const PRODUCT_DETAILS: IProductDetails = {
	description:
		'This turtle neck sweater has a relaxed fit and timeless color. An engaging design twist has been applied with asymmetric stitch details. Elegant yet classic and trendy with its own design feature. This piece can be tucked into everything from tailoring to faded jeans or a leather midi skirt.',
	sections: [
		{
			label: 'Details',
			contents: [
				'T-neck',
				'100% Mongolian cashmere',
				'525 grams',
				'8 ply',
				'3.5 gauge',
				'Cable and fisherman rib stitches',
				'Loose fit',
			],
		},
		{
			label: 'Organic Cashmere',
			contents: [
				'Made with 100% organic cashmere',
				'Certified by SFA',
				'GOBI Organic collection uses 100% organic cashmere with no dyes and bleaches, keeping the 4 natural colors of cashmere fiber',
			],
		},
		{
			label: 'Shipping Information',
			contents: [
				'Standard shipping rate: Starting from $7.90',
				'Delivery time: 1 - 3 business days.',
				'The shipping rate and delivery time apply for US only. For other information please see Shipping Policy',
			],
		},
	],
};

export const PRODUCT_FEATURES: IProductFeature[] = [
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

export const PRODUCT_ORIGIN: IProductOrigin = {
	province: {
		name: 'Bayanhongor',
		imagePath: '/images/bayanhongor-province.jpeg',
	},
	process: ['Washing', 'Yarns', 'Knitting'],
	composition: [{ material: 'cashmere', percentage: 100 }],
};

export const PRODUCT_REVIEWS: IProductReviews = {
	meta: { averageRating: 5, totalReviews: 10 },
	docs: [
		{
			author: 'Autumn D.',
			rating: 5,
			title: 'Amazing and unique!',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			date: new Date(),
		},
		{
			author: 'Autumn D.',
			rating: 5,
			title: 'Amazing and unique!',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			date: new Date(),
		},
		{
			author: 'Autumn D.',
			rating: 5,
			title: 'Amazing and unique!',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			date: new Date(),
		},
	],
};

export const RECOMMENDATIONS: IProduct[] = [
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

export const BRAND_DETAILS: { label: string; image: { path: string; alt: string } }[] = [
	{
		label: 'Affordable luxury',
		image: {
			path: '/images/rotated-sweater.png',
			alt: 'Sweater',
		},
	},
	{
		label: 'Premium quality',
		image: {
			path: '/images/group-of-models.png',
			alt: 'Group of Models',
		},
	},
	{
		label: 'Locally Made in Mongolia',
		image: {
			path: '/images/mountains.png',
			alt: 'Mountains',
		},
	},
];

export const HEADER_LINKS: ILink[] = [
	{ label: 'Women', href: '#' },
	{ label: 'Men', href: '#' },
	{ label: 'Accessories', href: '#' },
	{ label: 'Home', href: '#' },
	{ label: 'Gifts', href: '#' },
	{ label: 'Sale', href: '#' },
	{ label: 'About Us', href: '#' },
];

export const SOCIAL_LINKS: ILink[] = [
	{ label: 'Facebook', href: 'https://www.facebook.com/GobiCashmere' },
	{ label: 'Youtube', href: 'https://www.youtube.com/@GobiCashmereInternational' },
	{ label: 'Twitter', href: 'https://twitter.com/GobiCashmere' },
	{ label: 'Instagram', href: 'https://www.instagram.com/gobicashmere/' },
];

export const CUSTOMER_CARE_LINKS: ILink[] = [
	{ label: 'Support Center', href: '#' },
	{ label: 'Cashmere Care', href: '#' },
	{ label: 'Store Location', href: '#' },
	{ label: 'Return Portal', href: '#' },
	{ label: 'Rewards Program', href: '#' },
];

export const SUPPORT_LINKS: ILink[] = [
	{ label: 'Terms & Conditions', href: '#' },
	{ label: 'Shipping & Return Policy', href: '#' },
	{ label: 'Privacy Policy', href: '#' },
	{ label: 'Affiliate', href: '#' },
];

export interface ILink {
	label: string;
	href: string;
}

export interface IColor {
	code: string;
	label: string;
}

export interface IImage {
	path: string;
	alt: string;
}
export interface IProduct {
	imagePath: string;
	name: string;
	price: number;
	colors: IColor[];
}

export interface IProductOverview {
	category: string[];
	name: string;
	originalPrice: number;
	currentPrice: number;
	sale: number;
	colors: IColor[];
	sizes: string[];
	images: IImage[];
}

export interface IProductDetails {
	description: string;
	sections: {
		label: string;
		contents: string[];
	}[];
}

export interface IProductFeature {
	label: string;
	description: string;
	imagePath: string;
}

export interface IProductOrigin {
	province: {
		name: string;
		imagePath: string;
	};
	process: string[];
	composition: {
		material: string;
		percentage: number;
	}[];
}

export type Review = {
	author: string;
	title: string;
	content: string;
	rating: number;
	date: Date;
};

export interface IProductReviews {
	meta: {
		averageRating: number;
		totalReviews: number;
	};
	docs: {
		author: string;
		title: string;
		content: string;
		rating: number;
		date: Date;
	}[];
}

import BrandDetails from '@/components/features/brand-details';
import ProductDetails from '@/components/features/product-details';
import ProductFeatures from '@/components/features/product-features';
import ProductOrigin from '@/components/features/product-origin';
import ProductOverview from '@/components/features/product-overview';
import ProductReviews from '@/components/features/product-reviews';
import Recommendations from '@/components/features/recommendations';

export default function Home() {
	return (
		<>
			<ProductOverview />
			<ProductDetails />
			<ProductFeatures />
			<ProductOrigin />
			<Recommendations />
			<ProductReviews />
			<BrandDetails />
		</>
	);
}

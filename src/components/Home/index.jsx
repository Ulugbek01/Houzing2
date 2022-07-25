import Filter from '../Filter';
import Footer from '../Footer';
import Category from './Category';
import ChooseUse from './ChooseUse';
import HeroCarousel from './HeroCarousel';
import PopularHome from './PopularHome';
import RecentRent from './RecentRent';
import Recommended from './Recommended';
import Testimonials from './Testimonials';
import { Container } from './style';

const Home = () => {
	return (
		<Container>
			<Filter />
			<HeroCarousel />
			<Recommended />
			<ChooseUse />
			<Category />
			<PopularHome/>
			<RecentRent/>
			<Testimonials/>
			<Footer/>
		</Container>
	);
};

export default Home;

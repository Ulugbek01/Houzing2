import Filter from '../Filter';
import Category from './Category';
import ChooseUse from './ChooseUse';
import HeroCarousel from './HeroCarousel';
import PopularHome from './PopularHome';
import Recommended from './Recommended';
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
		</Container>
	);
};

export default Home;

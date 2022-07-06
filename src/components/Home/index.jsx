import Filter from '../Filter';
import Card from '../Generic/Card';
import HeroCarousel from './HeroCarousel';
import Recommended from './Recommended';
import { Container } from './style';

const Home = () => {
	return (
		<Container>
			<Filter />
			<HeroCarousel />
			<Recommended />
			<Card />
		</Container>
	);
};

export default Home;

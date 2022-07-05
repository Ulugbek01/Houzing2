import Filter from '../Filter';
import HeroCarousel from './HeroCarousel';
import { Container } from './style';

const Home = () => {
	return (
		<Container>
			<Filter />
			<HeroCarousel />
		</Container>
	);
};

export default Home;

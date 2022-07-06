import Filter from '../Filter';
import ChooseUse from './ChooseUse';
import HeroCarousel from './HeroCarousel';
import Recommended from './Recommended';
import { Container } from './style';

const Home = () => {
	return (
		<Container>
			<Filter />
			<HeroCarousel />
			<Recommended />
			<ChooseUse />
		</Container>
	);
};

export default Home;

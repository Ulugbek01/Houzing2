import React,{ useState } from 'react';
import { CardWrapper, IconWrapper } from './style';
import { ReactComponent as Beds } from '../../../assets/icons/beds.svg';
import { ReactComponent as Bath } from '../../../assets/icons/bath.svg';
import { ReactComponent as Garage } from '../../../assets/icons/car.svg';
import { ReactComponent as Ruler } from '../../../assets/icons/ruler.svg';
import { ReactComponent as Resize } from '../../../assets/icons/arrow-top-bottom.svg';
import { ReactComponent as Heart } from '../../../assets/icons/heart.svg';

const Card = ({ url, title, dscr, onClick }) => {
	const [selected, setSelected] = useState(false);

	const onSelect = () => {
		setSelected(!selected);
	}
	return (
		<CardWrapper title={dscr}>
			<CardWrapper.Img onClick={onClick}>
				<CardWrapper.Button
					btnType={'primary'}
					position='left'
					className='to-uppercase'>
					Featured
				</CardWrapper.Button>
				<img src={url} alt='card-img' />
				<CardWrapper.Button className='to-uppercase'>
					For sale
				</CardWrapper.Button>
			</CardWrapper.Img>

			<CardWrapper.Info>
				<CardWrapper.Title>{title}</CardWrapper.Title>
				<CardWrapper.Dscr>{dscr}</CardWrapper.Dscr>
				<CardWrapper.IconsWrapper>
					<CardWrapper.IconItem>
						<Beds />
						<p className='icon-name'>4 Beds</p>
					</CardWrapper.IconItem>
					<CardWrapper.IconItem>
						<Bath />
						<p className='icon-name'>5 Baths</p>
					</CardWrapper.IconItem>
					<CardWrapper.IconItem>
						<Garage />
						<p className='icon-name'>1 Garage</p>
					</CardWrapper.IconItem>
					<CardWrapper.IconItem>
						<Ruler />
						<p className='icon-name'>1200 Sq Ft</p>
					</CardWrapper.IconItem>
				</CardWrapper.IconsWrapper>
			</CardWrapper.Info>

			<CardWrapper.Footer>
				<CardWrapper.Footer.Price>
					<p className='per-month'>$2,800/mo</p>
					<b className='price'>$7,500/mo</b>
				</CardWrapper.Footer.Price>

				<CardWrapper.Footer.Icons>
					<IconWrapper>
						<Resize />
					</IconWrapper>
					<IconWrapper onClick={() => onSelect()} selected={selected}>
						<Heart />
					</IconWrapper>
				</CardWrapper.Footer.Icons>
			</CardWrapper.Footer>
		</CardWrapper>
	);
};

export default Card;

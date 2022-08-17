import React,{ useState } from 'react';
import { Modal } from 'antd';
import { CardWrapper, IconWrapper, ProfileImg } from './style';
import { ReactComponent as Beds } from '../../../assets/icons/beds.svg';
import { ReactComponent as Bath } from '../../../assets/icons/bath.svg';
import { ReactComponent as Garage } from '../../../assets/icons/car.svg';
import { ReactComponent as Ruler } from '../../../assets/icons/ruler.svg';
import { ReactComponent as Resize } from '../../../assets/icons/arrow-top-bottom.svg';
import { ReactComponent as Heart } from '../../../assets/icons/heart.svg';
import noImg  from '../../../assets/images/not_img.jpg';
import profileImg from '../../../assets/images/profile.png';
import ShowMore from './ShowMore';


const Card = ({ item, onClick }) => {
	const [selected, setSelected] = useState(false);
	const [visible, setVisible] = useState(false);

	const onSelect = () => {
		setSelected(!selected);
	}

	return (
		<CardWrapper className='card-wrapper'>
			<CardWrapper.Img onClick={onClick}>
				<CardWrapper.Button
					btnType={'primary'}
					position='left'
					className='to-uppercase'>
					Featured
				</CardWrapper.Button>
				<img src={item?.attachments[0].imgPath || noImg} alt='card-img' />
				<CardWrapper.Button className='to-uppercase'>
					For sale
				</CardWrapper.Button>

				<ProfileImg>
					<img src={item?.profileImg || profileImg} alt="profile img"/>
				</ProfileImg>

			</CardWrapper.Img>
			
			<CardWrapper.Info>
				<CardWrapper.Title>{item?.name || 'No Title'}</CardWrapper.Title>
				<CardWrapper.Dscr>{item?.description || 'No Description'}</CardWrapper.Dscr>
				<CardWrapper.IconsWrapper>
					<CardWrapper.IconItem>
						<Beds />
						<p className='icon-name'>{item?.houseDetails.beds > 1 ? `${item?.houseDetails.beds} Beds` : '1 Bed' || '4 Beds'} </p>
					</CardWrapper.IconItem>
					<CardWrapper.IconItem>
						<Bath />
						<p className='icon-name'>{item?.houseDetails.bath > 1 ? `${item?.houseDetails.bath} Baths` : '1 Bath' || '2 Baths'}</p>
					</CardWrapper.IconItem>
					<CardWrapper.IconItem>
						<Garage />
						<p className='icon-name'>{item?.houseDetails.garage || 1} Garage</p>
					</CardWrapper.IconItem>
					<CardWrapper.IconItem>
						<Ruler />
						<p className='icon-name'>{item?.houseDetails.area || 1200} Sq Ft</p>
					</CardWrapper.IconItem>
				</CardWrapper.IconsWrapper>
			</CardWrapper.Info>

			<Modal
				centered
				visible={visible}
				onOk={() => setVisible(false)}
				onCancel={() => setVisible(false)}
				width={'52%'}
			>
				<ShowMore item={item}/>
      		</Modal>

			<CardWrapper.Footer>
				<CardWrapper.Footer.Price>
					<p className='per-month'>${item?.price}/mo</p>
					<b className='price'>${item?.salePrice}/mo</b>
				</CardWrapper.Footer.Price>

				<CardWrapper.Footer.Icons>
					<IconWrapper onClick={() => setVisible(true)}>
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

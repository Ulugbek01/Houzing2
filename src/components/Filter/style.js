import styled from "styled-components";
import { ReactComponent as filter } from '../../assets/icons/filter.svg';
import { ReactComponent as search } from '../../assets/icons/search.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--width);
  margin: 0 auto;
  padding: 10px 0;
`;

export const PopoverWrapper = styled.div`

`;

PopoverWrapper.Address = styled.div``;
PopoverWrapper.ApartmentInfo = styled.div`
  margin: 20px 0;
`;
PopoverWrapper.Price = styled.div``;

export const Address = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ApartmentInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Price = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

PopoverWrapper.Footer = styled.div`
display: flex;
align-items: center;
margin-top: 40px;
`;

export const FilterIcon = styled(filter)`
  margin-right: 8px;
`;

export const Search = styled(search)`
  margin-right: 8px;
`;


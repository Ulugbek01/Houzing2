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

export const FilterIcon = styled(filter)`
  margin-right: 8px;
`;

export const Search = styled(search)`
  margin-right: 8px;
`;
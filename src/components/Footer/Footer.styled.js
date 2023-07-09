import styled from '@emotion/styled';
import {
  secondTextColor,
  secondBgColor,
  mainBgColor,
} from 'utilities/variables/css';

export const FooterWrapper = styled.footer`
  background-color: ${secondBgColor};
  color: ${secondTextColor};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.p`
  font-size: 15px;
  font-weight: 700;

 
`;

export const Studios = styled.span`
  display: inline-flex;
  border: 1px solid ${mainBgColor};
  padding: 10px;

 
`;

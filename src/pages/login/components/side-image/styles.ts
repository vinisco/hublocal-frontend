import { styled } from '@mui/material';
import image1 from '../../../../shared/images/image1.webp';

export const StyledBlueContainer = styled('div')`
  background-color: #0485ff;
  height: 100vh;
  width: 100%;
  max-width: 50vw;
`;

export const StyledPNG = styled('div')`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${image1});
`;

export const StyledGreenContainer = styled('div')`
  background-color: #00cc99;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledPNGGrid = styled('div')`
  width: 100%;
  height: 70vh;
`;

export const StyledWhiteTitle = styled('span')`
  color: white;
  font-family: Poppins;
  font-size: ${(theme) => theme.theme.spacing(4.4)};
  font-weight: 700;
  line-height: ${(theme) => theme.theme.spacing(4.4)};
`;

export const StyledWhiteSubtitle = styled('span')`
  color: white;
  font-family: Poppins;
  font-size: ${(theme) => theme.theme.spacing(2)};
  font-weight: 400;
  line-height: ${(theme) => theme.theme.spacing(2.5)};
`;

export const StyledTitleContainer = styled('div')``;
export const StyledSubTitleContainer = styled('div')`
  margin-top: ${(theme) => theme.theme.spacing(1)};
`;

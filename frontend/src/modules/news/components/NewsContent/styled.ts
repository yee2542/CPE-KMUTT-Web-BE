import styled from 'styled-components';

import COLORS from 'common/constants/colors';

export const NewsContentStyle = styled.div`
  display: block;
  font-family: 'Kanit', sans-serif;
  width: 100%;
  background-color: #fafafa;
  margin-top: 36px;
`;

export const NewsContentHeader = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${COLORS.GRAY_1};
  width: 100%;
  margin-bottom: 8px;
`;

export const NewsContentPostDate = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.GRAY_2};
  margin-bottom: 48px;
`;

export const NewsContentTumbnail = styled.div`
  background-color: ${COLORS.GRAY_2};
  width: 100%;
  height: 350px;
  margin-bottom: 36px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const NewsContentContainer = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.GRAY_1};
  margin-bottom: 32px;
`;

export const NewsContentFileConteiner = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

export const NewsContentFileHeader = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${COLORS.GRAY_2};
  margin-bottom: 16px;
`;

export const NewsContentFileList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

export const NewsContentFileNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NewsContentFileName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.GRAY_1};
`;

export const OtherNewsContainer = styled.div`
  width: 100%;
  margin-bottom: 36px;
`;

export const OtherNewsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const OtherNewsHeader = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${COLORS.GRAY_2};
`;

export const OtherNewsCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

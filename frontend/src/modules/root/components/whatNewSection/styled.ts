import styled from 'styled-components';
import COLORS from 'common/constants/colors';

export const WhatNewStyle = styled.div`
  display: flex;
  @font-face {
    font-family: 'Kanit';
    src: local('Kanit'), url(./fonts/Kanit-Regular.ttf) format('truetype');
  }

  font-family: 'Kanit', sans-serif;
  background-color: #fafafa;

  .bracket-top {
    position: absolute;
    width: 88px;
    height: 300px;
    left: 211.98px;
    top: 0px;

    /* default-primary-blue */

    background: #4a60ac;
    opacity: 0.05;
    border-radius: 30000px;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  }

  .bracket-bottom {
    position: absolute;
    width: 88px;
    height: 300px;
    left: 211.98px;
    top: 152px;

    /* default-primary-blue */

    background: #4a60ac;
    opacity: 0.05;
    border-radius: 30000px;
    transform: matrix(0.71, -0.71, -0.71, -0.71, 0, 0);
  }

  .card-container {
    display: flex;
    width: 1024px;
    justify-content: space-between;
    margin-bottom: 105px;
  }

  .portlet-title {
    display: block;
    width: 1024px;
    position: relative;
    margin-top: 65px;
    margin-bottom: 40px;

    .portlet-title__header {
      font-size: 28px;
      color: ${COLORS.PRIMARY_COLOR};
    }

    .portlet-disription {
      color: ${COLORS.GRAY_2};
      font-size: 14px;
    }

    .show-all {
      position: absolute;
      right: 0;
      top: 25px;
      font-size: 16px;
      color: ${COLORS.PRIMARY_COLOR};
      display: flex;
      align-items: center;
      cursor: pointer;

      .arrow-icon {
        background-image: url(/images/arrow-right.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: invert(38%) sepia(7%) saturate(5711%) hue-rotate(191deg) brightness(91%)
          contrast(79%);
        width: 16px;
        height: 14px;
        margin-left: 15px;
      }
    }
  }
`;

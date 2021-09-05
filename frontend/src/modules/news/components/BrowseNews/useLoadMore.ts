import { useEffect, useState } from 'react';

import { cardConstantsProps } from './types';

export type useLoadMoreArgs = {
  initData: cardConstantsProps[];
};

export type useLoadMore = {
  newsData: cardConstantsProps[];
  moreNewsData: boolean;
  loadMore: () => void;
};

const FIRST_N_OF_NEWS = 9;
const LOADMORE_N_OF_NEWS = 3;

const useLoadMore = (args: useLoadMoreArgs): useLoadMore => {
  const { initData } = args;
  const [newsData, setNewsData] = useState<cardConstantsProps[]>([]);
  const [cur, setCur] = useState<number>(FIRST_N_OF_NEWS);
  const [moreNewsData, setMoreNewsData] = useState<boolean>(false);

  useEffect(() => {
    setNewsData(initData.slice(0, FIRST_N_OF_NEWS));
  }, []);

  const loadMoreNews = () => {
    setCur(cur + LOADMORE_N_OF_NEWS);
  };

  useEffect(() => {
    if (cur < initData.length) setMoreNewsData(false);
    else setMoreNewsData(true);

    setNewsData(initData.slice(0, cur));
  }, [cur]);

  return {
    newsData,
    moreNewsData: moreNewsData,
    loadMore: () => {
      loadMoreNews();
    },
  };
};

export default useLoadMore;

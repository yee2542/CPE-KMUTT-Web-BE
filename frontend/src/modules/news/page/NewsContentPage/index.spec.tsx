import React from 'react';

import { shallow } from 'enzyme';

import NewsContent from 'modules/news/components/NewsContent';

import NewsContentPage from '.';

describe('newsContent page', () => {
  it('newsContent page should be defined', () => {
    const wrap = shallow(<NewsContentPage />);
    expect(wrap.exists()).toBe(true);
  });

  it('NewsContent Page should import these components', () => {
    const wrap = shallow(<NewsContentPage />);
    expect(wrap.find(NewsContent).exists()).toBe(true);
  });
});

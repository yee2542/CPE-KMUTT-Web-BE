import { Meta, Story } from '@storybook/react/types-6-0';

import { GlobalStyle } from 'modules/root/pages/App/styled';

import { NewsContentProps } from './types';

import NewsContent from '.';

export default {
  title: 'Modules/News/Components/NewsContent',
  component: NewsContent,
} as Meta;

export const NewsContentStory: Story<NewsContentProps> = () => (
  <>
    <GlobalStyle />
    <NewsContent tumbnail="/images/thumbnail2.png" />
  </>
);

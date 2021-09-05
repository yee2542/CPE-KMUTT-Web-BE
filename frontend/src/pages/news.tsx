import { GetServerSideProps } from 'next';

import { GetNewsDocument, GetNewsQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import BrowseNewsPage from 'modules/news/page/BrowseNewsPage';

// TODO: implement data api to compoenents
export const getServerSideProps: GetServerSideProps = async () => {
  const { data, loading } = await client.query<GetNewsQuery>({ query: GetNewsDocument });
  return {
    props: { data },
  };
};

const NewsPages: React.FC<{ data: GetNewsQuery }> = ({ data }) => {
  return <BrowseNewsPage data={data} />;
};

export default NewsPages;

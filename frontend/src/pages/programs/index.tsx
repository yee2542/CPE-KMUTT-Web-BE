import React from 'react';

import { GetServerSideProps } from 'next';

import { GetProgramsDocument, GetProgramsQuery } from 'common/generated/generated-types';
import { client } from 'common/services/client';

import BrowseProgramPage from 'modules/programs/pages/BrowseProgramPage';

// const mock: React.FC = () => <></>;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const { data } = await client.query<GetProgramsQuery>({
    query: GetProgramsDocument,
    variables: { locale },
  });
  return {
    props: { data },
  };
};

const ProgramPage: React.FC<{ data: GetProgramsQuery }> = ({ data }) => (
  <BrowseProgramPage data={data} />
);

export default ProgramPage;

import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import CommonLayout from 'common/components/Layouts/CommonLayout';

import NewsContent from 'modules/news/components/NewsContent';

const MOCK_NAVIGATE = [
  {
    link: '/',
    title: 'หน้าแรก',
  },
  {
    link: '/',
    title: 'ประกาศ',
  },
  {
    link: '/',
    title: 'สำหรับนักศึกษาใหม่',
  },
  {
    link: '/',
    title: 'ประกาศรายชื่อผู้มีสิทธิ์สอบสัมภาษณ์​ โครงการ Active Recruitment รอบที่ 2',
  },
];

const NewsContentPage: React.FC = () => {
  const router = useRouter();
  const route_id = router?.query?.id;

  return (
    <>
      <Head>
        <title>news Content Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout header="ข่าวสารและประกาศ" navigate={MOCK_NAVIGATE}>
        <NewsContent tumbnail="/images/thumbnail2.png" />
      </CommonLayout>
    </>
  );
};
export default NewsContentPage;

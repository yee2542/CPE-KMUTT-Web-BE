import React from 'react';

import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { VscFilePdf } from 'react-icons/vsc';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Container from 'common/components/Container';

import { constants, NEWS_CONTENT } from 'modules/news/components/NewsContent/constant';

import {
  NewsContentTumbnail,
  NewsContentContainer,
  NewsContentFileConteiner,
  NewsContentFileHeader,
  NewsContentFileList,
  NewsContentFileName,
  NewsContentFileNameContainer,
  NewsContentHeader,
  NewsContentPostDate,
  NewsContentStyle,
  OtherNewsContainer,
  OtherNewsHeaderContainer,
  OtherNewsHeader,
  OtherNewsCardContainer,
} from './styled';
import { NewsContentProps } from './types';

const NewsContent: React.FC<NewsContentProps> = (props) => {
  return (
    <NewsContentStyle>
      <Container>
        <NewsContentHeader>{NEWS_CONTENT.title}</NewsContentHeader>
        <NewsContentPostDate>{NEWS_CONTENT.postDate}</NewsContentPostDate>
        <NewsContentTumbnail
          style={{
            backgroundImage: `url(${props.tumbnail})`,
          }}
        />
        <NewsContentContainer>{NEWS_CONTENT.content}</NewsContentContainer>
        <NewsContentFileConteiner>
          <NewsContentFileHeader>
            ไฟล์แนบ ({NEWS_CONTENT?.file?.length})
          </NewsContentFileHeader>
          {NEWS_CONTENT?.file?.map((data, index) => (
            <NewsContentFileList key={index}>
              <NewsContentFileNameContainer>
                <VscFilePdf style={{ marginRight: '16px' }} color="#DD2025" size="24px" />
                <NewsContentFileName>{data.title}</NewsContentFileName>
              </NewsContentFileNameContainer>
              <Link href={data.link ?? '/'}>ดาวน์โหลด</Link>
            </NewsContentFileList>
          ))}
        </NewsContentFileConteiner>
        <OtherNewsContainer>
          <OtherNewsHeaderContainer>
            <OtherNewsHeader>ประกาศอื่นๆ</OtherNewsHeader>
            <Button $color="borderless">
              แสดงทั้งหมด
              <HiOutlineArrowRight
                className="Icon"
                style={{ marginLeft: '15px' }}
                size="20px"
              />
            </Button>
          </OtherNewsHeaderContainer>
          <OtherNewsCardContainer>
            {constants.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                description={data.description}
                date={data.date}
                links={data.links}
                id={data.id}
                variant={data.variant}
              />
            ))}
          </OtherNewsCardContainer>
        </OtherNewsContainer>
      </Container>
    </NewsContentStyle>
  );
};

export default NewsContent;

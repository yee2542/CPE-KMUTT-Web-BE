export interface NewsContentProps {
  id?: string;
  tumbnail?: string;
  content?: string;
  title?: string;
  postDate?: string;
  file?: {
    title?: string;
    link?: string;
  }[];
}

export interface cardConstantsProps {
  id: string;
  title?: string;
  description?: string;
  date?: string;
  links?: string;
  variant?: string;
}

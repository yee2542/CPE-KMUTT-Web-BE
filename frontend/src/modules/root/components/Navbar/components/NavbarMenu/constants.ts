import { MenuItem } from './types';

export const NAVBAR_MENU: MenuItem[] = [
  {
    key: '1',
    label: 'ปริญญาตรี',
    subMenu: [
      {
        key: '1',
        label: 'หลักสูตรปกติ',
        link: '/#',
      },
      {
        key: '2',
        label: 'หลักสูตรนานาชาติ',
        link: '/#',
      },
      {
        key: '3',
        label: 'หลักสูตรวิทยาศาสตร์สุขภาพ',
        link: '/#',
      },
      {
        key: '4',
        label: 'หลักสูตร Residental College',
        link: '/#',
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
  {
    key: '2',
    label: 'บัณฑิตศึกษา',
    subMenu: [
      {
        key: '1',
        label: 'หลักสูตรมหาบัณฑิต',
        link: '/#',
      },
      {
        key: '2',
        label: 'หลักสูตรดุษฎีบัณฑิต',
        link: '/#',
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
  {
    key: '3',
    label: 'ทุนการศึกษา',
    subMenu: [
      {
        key: '1',
        label: 'ทุนภาควิชา',
        link: '/#',
      },

      {
        key: '2',
        label: 'ทุนเพชรพระจอมเกล้า',
        link: '/#',
      },
      {
        key: '3',
        label: 'ทุน คปก.',
        link: '/#',
      },
      {
        key: '4',
        label: 'ทุนต่างประเทศ',
        link: '/#',
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
  {
    key: '4',
    label: 'การรับเข้าศึกษา',
    subMenu: [
      {
        key: '1',
        label: 'รับตรง (Active Recruitment)',
        link: '/#',
      },
      {
        key: '2',
        label: 'รับส่วนกลาง',
        link: '/#',
      },
      {
        key: '3',
        label: 'โครงการพิเศษ',
        link: '/#',
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
  {
    key: '5',
    label: 'เกี่ยวกับเรา',
    subMenu: [
      {
        key: '1',
        label: 'ภาควิชา',
        link: '/#',
      },
      {
        key: '2',
        label: 'บุคลากร',
        link: '/#',
      },
      {
        key: '3',
        label: 'นักศึกษา',
        link: '/#',
      },
      {
        key: '4',
        label: 'ความเป็นนานาชาติ',
        link: '/#',
      },
    ],
    picture: 'https://cpe.kmutt.ac.th/uploadFile/facebook-share-cover.jpg',
  },
];

export const STUDENT: MenuItem[] = [
  { key: '1', label: 'ปฏิทินการศึกษา' },
  { key: '2', label: 'ตารางเรียน / ตารางสอบ' },
  { key: '3', label: 'เอกสารสำหรับนักศึกษา' },
  { key: '4', label: 'LEB2' },
  { key: '5', label: 'NewACIS' },
  { key: '6', label: 'สมุดติดต่อภายในฯ' },
];

export const STAFF: MenuItem[] = [
  { key: '1', label: 'WEBMAIL' },
  { key: '2', label: 'INTRANET' },
  { key: '3', label: 'สมุดโทรศัพท์ มจธ.' },
  { key: '4', label: 'ค้นหาบุคคลากรและองค์กร มจธ.' },
  { key: '6', label: 'ข่าวสาร' },
  { key: '7', label: 'สหกรณ์ออมทรัพย์ มจธ.' },
  { key: '8', label: 'สมาคมศิษย์เก่า' },
  { key: '9', label: 'หอสมุด' },
  { key: '10', label: 'สำนักคอมพิวเตอร์' },
  { key: '11', label: 'ผู้ดูแลระบบเว็บไซต์' },
];

export const NAVBAR_SUB_MENU: MenuItem[] = [
  { key: '1', label: 'สำหรับนักศึกษาปัจจุบัน', subMenu: STUDENT },
  { key: '2', label: 'สำหรับบุคลากร', subMenu: STAFF },
  { key: '3', label: 'ดาวน์โหลด', link: '#' },
  { key: '4', label: 'ติดต่อเรา', link: '#' },
];

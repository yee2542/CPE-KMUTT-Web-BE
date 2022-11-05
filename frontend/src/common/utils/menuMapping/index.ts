import { MenuItem, MenuType } from 'common/components/Navbar/components/NavbarMenu/types';
import { STATIC_NEWS_ID_LINK, STATIC_NEWS_ID_LINK_PATTERN } from 'common/constants/links';
import {
  ComponentCommonMenuConfig,
  GetMenuQuery,
} from 'common/generated/generated-types';
import { INTERNAL_PAGE_MAPPING } from 'common/utils/menuMapping/constants';
import { SubMenuGenerated } from 'common/utils/menuMapping/types';
import { ImageStrapiUrl } from 'common/utils/urls';

export function mappingSubMenuLink(menu: SubMenuGenerated): string {
  if (menu?.internal_page?.internal_pages)
    return (
      INTERNAL_PAGE_MAPPING.find((el) => el.api === menu.internal_page?.internal_pages)
        ?.url || ''
    );
  if (menu?.news_announcement)
    return STATIC_NEWS_ID_LINK.replace(
      STATIC_NEWS_ID_LINK_PATTERN,
      menu.news_announcement.id,
    );
  if (menu?.url) return menu.url;

  console.warn('cannot convert link form API');
  console.warn(menu);
  return '';
}

export function mappingMenuType(type: string): MenuType {
  switch (type) {
    case 'Desktop':
      return MenuType.Desktop;
    case 'Mobile':
      return MenuType.Mobile;
    case 'Footer':
      return MenuType.Footer;
    case 'DesktopQuickMenu':
      return MenuType.DesktopQuickMenu;
    case 'MobileQuickMenu':
      return MenuType.MobileQuickMenu;
    case '__typename':
      return MenuType.None;
  }

  console.warn(type);
  console.warn('cannot find matching menu type');
  return MenuType.None;
}

export function menuType(config: ComponentCommonMenuConfig): MenuType[] {
  const configs = Object.entries(config);
  const parsed = configs.map((c) => ({
    type: mappingMenuType(c[0]),
    value: Boolean(c[1]),
  }));
  const filtered = parsed.filter((el) => el.value).map((el) => el.type);

  return filtered;
}

export const sortMenu = (data: GetMenuQuery): GetMenuQuery => {
  const sorted = data.mainMenus
    ?.sort((a, b) => (a?.order || 0) - (b?.order || 0))
    .map((m) => ({
      ...m,
      menus: m?.menus?.sort((a, b) => (a?.order || 0) - (b?.order || 0)),
    }));
  return { ...data, mainMenus: sorted } as GetMenuQuery;
};

export const menuMapping = (data: GetMenuQuery): MenuItem[] => {
  const menus = sortMenu(data).mainMenus;

  const mappedMenuType: MenuItem[] =
    menus?.map((m) => ({
      key: m?.id || '',
      label: m?.title || '',
      picture: ImageStrapiUrl(m?.thumbnail?.url || ''),
      types: menuType(m?.menu_config as ComponentCommonMenuConfig) || [],
      subMenu: m?.menus?.map((s) => ({
        key: s?.id || '',
        label: s?.title || '',
        link: mappingSubMenuLink(s) || '',
      })),
    })) || [];

  return mappedMenuType;
};

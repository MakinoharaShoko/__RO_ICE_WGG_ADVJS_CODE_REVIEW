import type { DefaultTheme } from '../theme/config'

const DesignSidebar: DefaultTheme.SideBarItem[] = [
  {
    text: '设计理念',
    link: '/design/index',
  },
  {
    text: '存储系统',
    link: '/design/storage',
  },
]

const GuideSidebar: DefaultTheme.SideBarItem[] = [
  {
    text: '📖 指南',
    link: '/guide/',
  },
]

const DevSidebar: DefaultTheme.SideBarItem[] = [
  {
    text: '📖 开发',
    link: '/dev/',
  },
  {
    text: '📖 开发规范',
    link: '/dev/standard',
  },
]

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/guide': GuideSidebar,
  '/design': DesignSidebar,
  '/dev': DevSidebar,
}

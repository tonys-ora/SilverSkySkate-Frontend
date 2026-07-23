import { FC, memo } from 'react'

import Stack from '@mui/material/Stack'

import AddIcon from '@/assets/icons/add.svg'
import AffiliateIcon from '@/assets/icons/affiliate.svg'
import BankIcon from '@/assets/icons/bank.svg'
import BlogsIcon from '@/assets/icons/blogs.svg'
import CasinoIcon from '@/assets/icons/casino.svg'
import ChartIcon from '@/assets/icons/chart.svg'
import CloseIcon from '@/assets/icons/close.svg'
import DocumentAlignIcon from '@/assets/icons/document-align.svg'
import DocumentDownloadIcon from '@/assets/icons/document-download.svg'
import ForumIcon from '@/assets/icons/forum.svg'
import GoogleIcon from '@/assets/icons/google.svg'
import HeadphoneIcon from '@/assets/icons/headphone.svg'
import LiveSupportIcon from '@/assets/icons/live-support.svg'
import LogoutIcon from '@/assets/icons/logout.svg'
import MenuIcon from '@/assets/icons/menu.svg'
import Menu2Icon from '@/assets/icons/menu2.svg'
import MessageIcon from '@/assets/icons/message.svg'
import Message2Icon from '@/assets/icons/message2.svg'
import Message3Icon from '@/assets/icons/message3.svg'
import MoonIcon from '@/assets/icons/moon.svg'
import NotificationIcon from '@/assets/icons/notification.svg'
import ProfileAdd1Icon from '@/assets/icons/profile-add1.svg'
import ProfileSquareIcon from '@/assets/icons/profile-square.svg'
import PromotionIcon from '@/assets/icons/promotion.svg'
import ScanIcon from '@/assets/icons/scan.svg'
import SearchIcon from '@/assets/icons/search.svg'
import SecurityIcon from '@/assets/icons/security.svg'
import SettingsIcon from '@/assets/icons/settings.svg'
import SponsorshipIcon from '@/assets/icons/sponsorship.svg'
import SportsIcon from '@/assets/icons/sports.svg'
import SunIcon from '@/assets/icons/sun.svg'
import UploadIcon from '@/assets/icons/upload.svg'
import VipClubIcon from '@/assets/icons/vip-club.svg'
import WalletIcon from '@/assets/icons/wallet.svg'
import Website2Icon from '@/assets/icons/website2.svg'

import { colors } from '@/theme'

export const ICONS_MAP = {
  add: AddIcon,
  affiliate: AffiliateIcon,
  bank: BankIcon,
  blogs: BlogsIcon,
  casino: CasinoIcon,
  close: CloseIcon,
  chart: ChartIcon,
  'document-align': DocumentAlignIcon,
  'document-download': DocumentDownloadIcon,
  forum: ForumIcon,
  google: GoogleIcon,
  headphone: HeadphoneIcon,
  'live-support': LiveSupportIcon,
  logout: LogoutIcon,
  menu: MenuIcon,
  menu2: Menu2Icon,
  message: MessageIcon,
  message2: Message2Icon,
  message3: Message3Icon,
  moon: MoonIcon,
  notification: NotificationIcon,
  scan: ScanIcon,
  search: SearchIcon,
  security: SecurityIcon,
  settings: SettingsIcon,
  sponsorship: SponsorshipIcon,
  sports: SportsIcon,
  sun: SunIcon,
  website2: Website2Icon,
  'profile-add1': ProfileAdd1Icon,
  'profile-square': ProfileSquareIcon,
  promotion: PromotionIcon,
  upload: UploadIcon,
  'vip-club': VipClubIcon,
  wallet: WalletIcon
}

export type IconType = keyof typeof ICONS_MAP

export type IconColor = keyof typeof colors

interface AppIconProps {
  name: IconType
  size?: number
  color?: IconColor
}

const AppIcon: FC<AppIconProps> = ({ name, size = 20, color, ...props }) => {
  const IconComponent = ICONS_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  return (
    <Stack
      className='app-icon'
      component='span'
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color && colors[color],
        '& svg': {
          width: size,
          height: size
        }
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}

export default memo(AppIcon)

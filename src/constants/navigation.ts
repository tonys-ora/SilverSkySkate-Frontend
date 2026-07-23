import { Navigation } from '@/types'

export const navigation: Navigation[] = [
  { link: '/promotion', text: 'Promotion', icon: 'promotion' },
  { link: '/affiliate', text: 'Affiliate', icon: 'affiliate' },
  { link: '/vip-club', text: 'VIP Club', icon: 'vip-club' },
  { link: '/blogs', text: 'Blogs', icon: 'blogs' },
  { link: '/forum', text: 'Forum', icon: 'forum' },
  { link: '/sponsorship', text: 'Sponsorship', icon: 'sponsorship' },
  { link: '/live-support', text: 'Live Support', icon: 'live-support' }
]

export const PROFILE_ITEMS: Navigation[] = [
  {
    link: '/profile/wallet',
    text: 'Wallet',
    icon: 'wallet'
  },
  {
    link: '/profile/vault',
    text: 'Vault',
    icon: 'security'
  },
  {
    link: '/profile/vip',
    text: 'VIP',
    icon: 'profile-square'
  },
  {
    link: '/profile/affilate',
    text: 'Affilate',
    icon: 'profile-add1'
  },
  {
    link: '/profile/statistics',
    text: 'Statistics',
    icon: 'chart'
  },
  {
    link: '/profile/transactions',
    text: 'Transactions',
    icon: 'document-align'
  },
  {
    link: '/profile/my-bets',
    text: 'My Bets',
    icon: 'document-download'
  },
  {
    link: '/profile/settings',
    text: 'Settings',
    icon: 'settings'
  },
  {
    link: '/profile/skate-smart',
    text: 'Stake Smart',
    icon: 'website2'
  },
  {
    link: '/profile/live-support',
    text: 'Live Support',
    icon: 'headphone'
  },
  {
    link: '/logout',
    text: 'Log out',
    icon: 'logout'
  }
]

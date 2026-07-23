import { SelectOption, SettingTab } from '@/types/settings'

import { ROUTES } from '@/configs'

export const settings: SettingTab[] = [
  {
    title: 'Account',
    link: ROUTES.ACCOUNT
  },
  {
    title: 'Security',
    link: ROUTES.SECURITY
  },
  {
    title: 'Preferences',
    link: ROUTES.PREFERENCES
  },
  {
    title: 'Sessions',
    link: ROUTES.SESSIONS
  },
  {
    title: 'Ignored Users',
    link: ROUTES.IGNORED_USERS
  },
  {
    title: 'Verify',
    link: ROUTES.VERIFY
  },
  {
    title: 'Offers',
    link: ROUTES.OFFERS
  }
]

interface CountryType {
  code: string
  label: string
  phone: string
  suggested?: boolean
}

export const countries: readonly CountryType[] = [
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true
  },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true
  },
  { code: 'CN', label: 'China', phone: '86' }
]

export const languages: SelectOption[] = [
  {
    label: '123,456,789',
    value: '123,456,789'
  },
  {
    label: '221,321,356',
    value: '221,321,356'
  }
]

export const fiatNumberFormattings: SelectOption[] = [
  {
    label: '123,456,789',
    value: '123,456,789'
  }
]

export const countryOptions: SelectOption[] = [
  {
    label: 'United States',
    value: 'United States'
  },
  {
    label: 'Canada',
    value: 'Canada'
  },
  {
    label: 'China',
    value: 'China'
  }
]

export const cityOptions: SelectOption[] = [
  {
    label: 'Jakarta',
    value: 'Jakarta'
  }
]

export const dateOfBirthOptions: SelectOption[] = [
  {
    label: '09/22/2001',
    value: '2001-09-22T07:00:00.000Z'
  }
]

export const postalCodeOptions: SelectOption[] = [
  {
    label: '93721',
    value: '93721'
  }
]

export const occupationIndustryOptions: SelectOption[] = [
  {
    label: 'Technology',
    value: 'Technology'
  }
]

export const occupationOptions: SelectOption[] = [
  {
    label: 'Technician',
    value: 'Technician'
  }
]

export const occupationExperience: SelectOption[] = [
  {
    label: '2 years',
    value: '2 years'
  }
]

export const walletOptions: SelectOption[] = [
  { value: '0', label: '0.000123 BTC', icon: 'bank' },
  { value: '1', label: '0.000123 BTC', icon: 'bank' },
  { value: '2', label: '0.000123 BTC', icon: 'bank' }
]

export const residentialAddress: SelectOption[] = [{ label: 'Drivers license', value: 'Drivers license' }]

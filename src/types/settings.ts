import { IconType } from '@/components/Core/AppIcon'

export type SettingType = 'Account' | 'Security' | 'Preferences' | 'Sessions' | 'Ignored Users' | 'Verify' | 'Offers'

export interface SettingTab {
  title: SettingType
  link: string
  // Component: React.FC
}

export interface SelectOption {
  label: string
  value: string
  icon?: IconType
}

export interface IgnoredUser {
  user: {
    _id: string
    username: string
  }
  isDeleted: Boolean
  _id: string
  createdAt: Date
}

export interface SessionType {
  _id: string
  browser: string
  near: string
  createdAt: Date
  ipAddress: string
}

export interface Details {
  firstName: string
  lastName: string
  country: string
  placeOfBirth: string
  dateOfBirth: Date
  residentialAddress: string
  city: string
  postalCode: string
  occupationIndustry: string
  occupation: string
  occupationExperience: string
}

export interface Preferences {
  language: string,
  marketing: boolean,
  fiatFormatting: string
}

export interface Identification {
  residentialAddress: string
  fileFrontSide: string
  fileBackSide: string
}

import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'

import {
  AccountData,
  Details,
  Identification,
  IgnoredUser,
  LoginUserReq,
  LoginUserRes,
  Preferences,
  RegisterUserReq,
  SessionType
} from '@/types'

export const loginUser = async (data: LoginUserReq): Promise<LoginUserRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.LOGIN,
    data,
    errorMessage: 'Login failed'
  })
}

export const registerUser = async (data: RegisterUserReq): Promise<{ message: string }> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.REGISTER,
    data,
    errorMessage: 'Registration failed'
  })
}

export const fetchAccountData = async (): Promise<AccountData> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.ACCOUNT,
    errorMessage: 'Account data loading is failed'
  })
}
export const updateAccountData = async (data: FormData): Promise<LoginUserRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.SETTINGS.ACCOUNT,
    data,
    errorMessage: 'Account data loading is failed'
  })
}

export const fetchSecurity = async (): Promise<{ is2FAEnabled: boolean; secret: string }> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.SECURITY,
    errorMessage: 'security data loading is failed'
  })
}
export const setUp2FA = async (): Promise<{ is2FAEnabled: boolean; secret: string }> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.SETTINGS.SECURITY,
    errorMessage: 'setup 2fa failed'
  })
}
export const verify2FA = async (data: { token: string }): Promise<{ message: string }> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.SETTINGS.SECURITY_VERIFY,
    data,
    errorMessage: 'Not verified'
  })
}

export const fetchPreferences = async (): Promise<{ language: string; marketing: boolean; fiatFormatting: string }> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.PREFERENCES,
    errorMessage: 'preferences loading is failed'
  })
}
export const updatePreferences = async (
  data: Preferences
): Promise<{ language: string; marketing: boolean; fiatFormatting: string }> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.SETTINGS.PREFERENCES,
    data,
    errorMessage: 'preferences updating is failed'
  })
}

export const fetchIgnoredUsers = async (): Promise<IgnoredUser[]> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.IGNORED_USERS,
    errorMessage: 'Ignored User Data loading is failed'
  })
}

export const removeIgnoredUser = async (data: { id: string }): Promise<IgnoredUser[]> => {
  return apiRequest({
    method: 'DELETE',
    url: API_ENDPOINTS.SETTINGS.IGNORED_USERS,
    data,
    errorMessage: 'ignored user removing failed'
  })
}

export const fetchSessions = async (): Promise<SessionType[]> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.SESSIONS,
    errorMessage: 'sessions loading is failed'
  })
}
export const removeSession = async (data: { id: string }): Promise<SessionType[]> => {
  return apiRequest({
    method: 'DELETE',
    url: API_ENDPOINTS.SETTINGS.SESSIONS,
    data,
    errorMessage: 'session removing is failed'
  })
}

export const fetchVerifyData = async (): Promise<{ currentStep: number }> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.VERIFY.STEP,
    errorMessage: 'verify data loading is failed'
  })
}

export const fetchVerifyLevel1Data = async (): Promise<Details> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.VERIFY.LEVEL1,
    errorMessage: 'verify data loading is failed'
  })
}

export const fetchVerifyLevel2Data = async (): Promise<Identification> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.VERIFY.LEVEL2,
    errorMessage: 'verify data loading is failed'
  })
}

export const fetchVerifyLevel3Data = async (): Promise<{ proofOfAddress: string }> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.VERIFY.LEVEL3,
    errorMessage: 'verify data loading is failed'
  })
}

export const fetchVerifyLevel4Data = async (): Promise<{ sourceOfFund: string }> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.SETTINGS.VERIFY.LEVEL4,
    errorMessage: 'verify data loading is failed'
  })
}

export const updateVerifyLevel1Data = async (data: Partial<Details>): Promise<Details> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.SETTINGS.VERIFY.LEVEL1,
    data,
    errorMessage: 'updating is failed'
  })
}
export const updateVerifyLevel2Data = async (
  data: FormData
): Promise<{ residentialAddress: string; fileFrontSide: string; fileBackSide: string }> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.SETTINGS.VERIFY.LEVEL2,
    data,
    errorMessage: 'updating is failed'
  })
}

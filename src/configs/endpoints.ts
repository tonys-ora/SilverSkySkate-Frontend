export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/register',
    LOGIN: '/login'
  },
  SETTINGS: {
    ACCOUNT: '/settings',
    SECURITY: '/settings/security',
    SECURITY_VERIFY: '/settings/security/verify',
    PREFERENCES: '/settings/preferences',
    SESSIONS: '/settings/sessions',
    IGNORED_USERS: '/settings/ignored-users',
    VERIFY: {
      STEP: '/settings/verify',
      LEVEL1: '/settings/verify/level1',
      LEVEL2: '/settings/verify/level2',
      LEVEL3: '/settings/verify/level3',
      LEVEL4: '/settings/verify/level4'
    }
  }
}

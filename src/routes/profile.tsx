import { ROUTES } from '@/configs'

import Settings from '@/layout/Settings'
import { Account } from '@/pages/Settings/Account'
import { IgnoredUsers } from '@/pages/Settings/IgnoredUsers'
import { Offers } from '@/pages/Settings/Offers'
import { Preferences } from '@/pages/Settings/Preferences'
import { Security } from '@/pages/Settings/Security'
import { Sessions } from '@/pages/Settings/Sessions'
import Verify from '@/pages/Settings/Verify'

export const profileRoutes = [
  {
    path: ROUTES.SETTING,
    element: <Settings />,
    children: [
      {
        index: true,
        element: <Account />
      },
      {
        path: ROUTES.SECURITY,
        element: <Security />
      },
      {
        path: ROUTES.PREFERENCES,
        element: <Preferences />
      },
      {
        path: ROUTES.SESSIONS,
        element: <Sessions />
      },
      {
        path: ROUTES.IGNORED_USERS,
        element: <IgnoredUsers />
      },
      {
        path: ROUTES.VERIFY,
        element: <Verify />
      },
      {
        path: ROUTES.OFFERS,
        element: <Offers />
      }
    ]
  }
]

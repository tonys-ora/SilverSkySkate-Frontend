import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/x-charts/themeAugmentation'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-tree-view/themeAugmentation'
import { RouterProvider } from 'react-router-dom'

import AppTheme from '@/theme/AppTheme'

import router from './routes'

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </AppTheme>
  )
}

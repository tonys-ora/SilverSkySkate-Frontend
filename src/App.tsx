import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/x-charts/themeAugmentation'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-tree-view/themeAugmentation'
import { RouterProvider } from 'react-router-dom'

import Dialogs from '@/components/Core/Dialogs'
import { DialogProvider } from '@/context/DialogProvider'
import AppTheme from '@/theme/AppTheme'

import router from './routes'

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <DialogProvider>
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
        <Dialogs />
      </DialogProvider>
    </AppTheme>
  )
}

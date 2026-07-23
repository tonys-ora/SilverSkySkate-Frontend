import { useContext } from 'react'

import { DialogContext, DialogContextProps } from '@/context/DialogProvider'

export const useDialog = (): DialogContextProps => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }

  return context
}

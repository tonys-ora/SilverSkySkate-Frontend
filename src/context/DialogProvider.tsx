import { FC, ReactNode, createContext, useCallback, useState } from 'react'

type DialogType = 'auth' | null

export interface DialogContextProps {
  openDialog: (dialog: DialogType, data?: unknown) => void
  closeDialog: () => void
  activeDialog: DialogType
  data: unknown
}

export const DialogContext = createContext<DialogContextProps | undefined>(undefined)

export const DialogProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<unknown>(null)
  const [activeDialog, setActiveDialog] = useState<DialogType>(null)

  const openDialog = useCallback((dialog: DialogType, data?: unknown) => {
    setActiveDialog(dialog)
    if (data) {
      setData(data)
    }
  }, [])

  const closeDialog = useCallback(() => {
    setActiveDialog(null)
    setData(null)
  }, [])

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog, activeDialog, data }}>{children}</DialogContext.Provider>
  )
}

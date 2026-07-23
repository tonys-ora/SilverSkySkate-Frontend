export const hexToRgba = (hex: string, alpha: number = 100): string => {
  // Remove the '#' if present
  hex = hex.replace('#', '')

  // Extract red, green, blue
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // Return in rgba format
  return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`
}

export const getRelativeTimeString = (date: Date | number | string, lang: string = navigator.language): string => {
  const timeMs = typeof date === 'number' ? date : typeof date === 'string' ? new Date(date).getTime() : date.getTime()
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000)

  const cutoffs = [60, 3600, 86004, 2592000, 31104000]
  const units: Intl.RelativeTimeFormatUnit[] = ['second', 'minute', 'hour', 'day', 'month', 'year']
  const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))

  const divisor = unitIndex === 0 ? 1 : cutoffs[unitIndex - 1]
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })

  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
}

/**
 * Handles errors gracefully
 * @param error - The error thrown by Axios or other sources
 * @param defaultMessage - Default error message if no specific error message is available
 */
export const handleError = (err: unknown, defaultMessage?: string) => {
  const message = err instanceof Error ? err.message : defaultMessage || 'An unknown error occurred'
  const toastOptions = { hideProgressBar: true, toastId: message }

  alert(message)
  // if (!toast.isActive(message)) {
  //   toast.error(message, toastOptions)
  // } else {
  //   toast.update(message, { ...toastOptions, render: message })
  // }
}
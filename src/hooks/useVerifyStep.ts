import { useSelector } from '@/store'

export function useVerifyStep() {
  const { verifyStep } = useSelector(store => store.setting)

  return verifyStep
}

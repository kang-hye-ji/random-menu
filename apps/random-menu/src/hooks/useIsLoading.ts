import { useCallback, useState } from 'react'

type Params = {
  defaultValue?: boolean
}
type UseIsLoading = {
  isLoading: boolean
  toggleIsLoading: (forceValue?: boolean) => void
}

export const useIsLoading = ({ defaultValue }: Params): UseIsLoading => {
  const [isLoading, setIsLoading] = useState<boolean>(defaultValue ?? true)

  const toggleIsLoading = useCallback((forceValue?: boolean) => {
    setIsLoading((prev) => forceValue ?? !prev)
  }, [])

  return { isLoading, toggleIsLoading }
}

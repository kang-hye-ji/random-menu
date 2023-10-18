'use client'
import { useEffect } from 'react'
import { SpinnerText } from 'common-ui'
import { shuffle } from 'lodash'
import { useIsLoading } from '@/hooks'
import { CATEGORIES } from '@/constants/categories'
import PickedCategory from './PickedCategory'

const ContainerCategories = (): JSX.Element => {
  const { isLoading, toggleIsLoading } = useIsLoading({})

  useEffect(() => {
    setTimeout(() => {
      toggleIsLoading(false)
    }, 2500)
  }, [toggleIsLoading])

  if (isLoading) {
    return <SpinnerText items={shuffle(CATEGORIES)} />
  }

  return <PickedCategory />
}

export default ContainerCategories

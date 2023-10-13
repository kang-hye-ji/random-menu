import type {
  GenerateNumArrayParams,
  GenerateRandomNumberParams,
} from './types/generator'

export const generateClasses = (classes?: (string | undefined)[]): string => {
  if (!classes) {
    return ''
  }

  return classes.filter(Boolean).join(' ')
}

export const generateNumArray = ({
  length,
  start = 1,
}: GenerateNumArrayParams): number[] => {
  return Array.from({ length }, (_, i) => i + start)
}

export const generateRandomNumber = ({
  min = 1,
  max = 10,
}: GenerateRandomNumberParams): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateUniqueId = (): number => {
  return Date.now()
}

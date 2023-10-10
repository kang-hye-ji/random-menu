export const generateClasses = (classes?: (string | undefined)[]): string => {
  if (!classes) {
    return ''
  }

  return classes.filter(Boolean).join(' ')
}

type GenerateNumArrayParams = {
  length: number
  start?: number
}
export const generateNumArray = ({
  length,
  start = 1,
}: GenerateNumArrayParams): number[] => {
  return Array.from({ length }, (_, i) => i + start)
}

type GenerateRandomNumberParams = {
  min?: number
  max?: number
}
export const generateRandomNumber = ({
  min = 1,
  max = 10,
}: GenerateRandomNumberParams): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

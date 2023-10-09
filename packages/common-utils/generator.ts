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

export const errorHandler = (
  e: unknown,
  prefix?: string,
  replaceFunc?: () => void,
): void => {
  if (replaceFunc) {
    replaceFunc?.()
    return
  }

  if (!prefix?.length) {
    alert('오류가 발생했습니다.')
    return
  }

  alert(`${prefix} 오류가 발생했습니다.`)
}

export function getElementIndex(
  array: any[],
  key: string,
  element: any
): number {
  return array.findIndex((el) => el[key] === element[key])
}

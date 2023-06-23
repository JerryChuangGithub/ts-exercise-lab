function extractAndConvert<T extends {}, U extends keyof T>(obj: T, key: U) {
  return obj[key]
}

console.log(extractAndConvert({ name: 'Jerry' }, 'name'))

export {}
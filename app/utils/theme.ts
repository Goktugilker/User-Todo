// export function isDark() { ❌
//   return useColorMode().value === 'dark'
// }

export const isDark = computed(() => useColorMode().value === 'dark')

export function toggleTheme() {
  const colorMode = useColorMode()
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

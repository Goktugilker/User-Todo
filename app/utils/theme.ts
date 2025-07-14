export function isDark() {
  return useColorMode().value === 'dark'
}
export function toggleTheme() {
  useColorMode().preference = isDark() ? 'light' : 'dark'
}

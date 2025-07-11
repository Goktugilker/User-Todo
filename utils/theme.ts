export const isDark =computed(() => {
  return useColorMode().value === 'dark'
})
export function toggleTheme() {
    const colorMode = useColorMode()
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
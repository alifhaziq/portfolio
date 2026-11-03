const STORAGE_KEY = 'theme'

export const useTheme = () => {
  const isDark = ref(false)

  const apply = (dark: boolean) => {
    isDark.value = dark
    document.documentElement.classList.toggle('dark', dark)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0c0f0a' : '#171a15')
  }

  const init = () => {
    apply(document.documentElement.classList.contains('dark'))

    // Follow the OS setting until the visitor makes an explicit choice.
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      if (!localStorage.getItem(STORAGE_KEY)) apply(event.matches)
    })
  }

  const toggle = () => {
    apply(!isDark.value)
    try {
      localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this visit only.
    }
  }

  return { isDark, init, toggle }
}

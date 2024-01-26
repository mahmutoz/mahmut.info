import ThemeProvider from '@/theme'
import { SettingsProvider } from '@/components/settings'
import { MotionLazy } from '@/components/animate/motion-lazy'
import SnackbarProvider from '@/components/snackbar/snackbar-provider'

type Props = {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <SettingsProvider
      defaultSettings={{
        themeMode: 'light', // 'light' | 'dark'
        themeContrast: 'default', // 'default' | 'bold'
        themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
        themeColorPresets: 'blue', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
        themeStretch: false,
      }}
    >
      <ThemeProvider>
        <MotionLazy>
          <SnackbarProvider>{children}</SnackbarProvider>
        </MotionLazy>
      </ThemeProvider>
    </SettingsProvider>
  )
}

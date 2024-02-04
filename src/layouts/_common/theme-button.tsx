import Iconify from '@/components/iconify'
import { useSettingsContext } from '@/components/settings'

import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

export default function ThemeButton() {
  const { themeMode, onUpdate } = useSettingsContext()

  return (
    <Tooltip title={`${themeMode === 'light' ? 'Koyu' : 'Açık'} temaya geç`} arrow>
      <IconButton onClick={() => onUpdate('themeMode', themeMode === 'light' ? 'dark' : 'light')} color="primary">
        <Iconify
          icon={
            themeMode === 'light'
              ? 'line-md:moon-filled-alt-loop'
              : 'line-md:moon-filled-alt-to-sunny-filled-loop-transition'
          }
          color={themeMode === 'light' ? 'primary.light' : 'warning.light'}
        />
      </IconButton>
    </Tooltip>
  )
}

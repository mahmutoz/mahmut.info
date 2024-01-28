import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export function iconButton(theme: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  }
}

import { Theme } from '@mui/material/styles'

export function defaultProps(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  }
}

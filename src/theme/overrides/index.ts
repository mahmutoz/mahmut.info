import merge from 'lodash/merge'
import { defaultProps } from '@/theme/overrides/default-props'

import { Theme } from '@mui/material/styles'

import { button } from './components/button'

export function componentsOverrides(theme: Theme) {
  return merge(
    defaultProps(theme),
    //
    button(theme)
  )
}

import merge from 'lodash/merge'
import { card } from '@/theme/overrides/components/card'
import { menu } from '@/theme/overrides/components/menu'
import { tabs } from '@/theme/overrides/components/tabs'
import { paper } from '@/theme/overrides/components/paper'
import { button } from '@/theme/overrides/components/button'
import { appBar } from '@/theme/overrides/components/appbar'
import { avatar } from '@/theme/overrides/components/avatar'
import { defaultProps } from '@/theme/overrides/default-props'
import { tooltip } from '@/theme/overrides/components/tooltip'
import { svgIcon } from '@/theme/overrides/components/svg-icon'
import { skeleton } from '@/theme/overrides/components/skeleton'
import { typography } from '@/theme/overrides/components/typography'
import { iconButton } from '@/theme/overrides/components/icon-button'
import { cssBaseline } from '@/theme/overrides/components/css-baseline'
import { toggleButton } from '@/theme/overrides/components/toggle-button'

import { Theme } from '@mui/material/styles'

export function componentsOverrides(theme: Theme) {
  return merge(
    defaultProps(theme),
    //
    tabs(theme),
    card(theme),
    menu(theme),
    paper(theme),
    appBar(theme),
    button(theme),
    avatar(theme),
    tooltip(theme),
    svgIcon(theme),
    skeleton(theme),
    typography(theme),
    iconButton(theme),
    cssBaseline(theme),
    toggleButton(theme)
  )
}

import { useMemo } from 'react'

// import { paths } from 'src/routes/paths'

// ----------------------------------------------------------------------

type NavData = {
  title: string
  path: string
}

export function useNavData(): NavData[] {
  return useMemo(
    () => [
      // {
      //   title: 'Hakkımda',
      //   path: paths.about,
      // },
    ],
    []
  )
}

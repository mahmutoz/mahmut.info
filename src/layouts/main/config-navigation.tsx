import { useMemo } from 'react'

import { paths } from 'src/routes/paths'

// ----------------------------------------------------------------------

export function useNavData() {
  return useMemo(
    () => [
      // {
      //   title: 'Hakkımda',
      //   path: paths.about,
      // },
      {
        title: 'Blog',
        path: paths.blog,
      },
      {
        title: 'Galeri',
        path: paths.gallery,
      },
      {
        title: 'İletişim',
        path: paths.contact,
      },
    ],
    []
  )
}

import { useMemo } from 'react'

import { paths } from 'src/routes/paths'

// ----------------------------------------------------------------------

export function useNavData() {
  return useMemo(
    () => [
      {
        title: 'About',
        path: paths.about,
      },
      {
        title: 'Blog',
        path: paths.blog,
      },
      {
        title: 'Gallery',
        path: paths.gallery,
      },
      {
        title: 'Contact',
        path: paths.contact,
      },
    ],
    []
  )
}

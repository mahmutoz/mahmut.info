import rehypePrettyCode from 'rehype-pretty-code'

export const prettyCode = [
  rehypePrettyCode,
  {
    theme: {
      dark: 'github-dark-dimmed',
      light: 'github-light',
    },
    keepBackground: false,
    tokensMap: {
      var: 'variable.other',
      fn: 'entity.name.function', // green
      cls: 'entity.name.class', // blue
      str: 'string', // amber
      num: 'constant.numeric', // purple
      key: 'keyword', // red
      prm: 'variable.parameter', // orange
    },
  },
]

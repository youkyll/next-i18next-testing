import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ja',
  otherLanguages: ['en'],
  debug: true,
})

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
} = NextI18NextInstance

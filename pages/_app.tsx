import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../src/styles/GlobalStyle'
import theme from '../src/styles/theme'
import { Page } from '../types/page'

type Props = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: Props): JSX.Element => {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default MyApp

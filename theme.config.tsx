import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Zero Coupled Architecture (ALA)</span>,
  project: {
    link: 'https://github.com/modellurgist/zerocoupled.com',
  },
  docsRepositoryBase: 'https://github.com/modellurgist/zerocoupled.com',
  footer: {
    text: '© 2024 Tom Calloway (github.com/modellurgist)',
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Zero Coupled'
      }
    }
  }
}

export default config

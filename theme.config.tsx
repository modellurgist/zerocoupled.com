import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  // Navigation - Header & Footer
  banner: {
    text: "This documentation is a Work-in-Progress. Estimated completion by July 2024."
  },
  docsRepositoryBase: 'https://github.com/modellurgist/zerocoupled.com',
  footer: {
    text: '© 2024 Tom Calloway (github.com/modellurgist)',
  },
  logo: <span>Zero Coupled Architecture (ALA)</span>,
  project: {
    link: 'https://github.com/modellurgist/zerocoupled.com',
  },
  // Navigation - Sidebar
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  // editLink: {
  // // results in console error:
  //   component: null
  // },
  feedback: {
    content: "What could be better? Tell us here →",
    labels: "reader-suggestion"
  },
  // Navigation - Table of Contents
  toc: {
    // backToTop: true
    float: true,
    title: "Current Page Contents"
  },
  // Page Metadata
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

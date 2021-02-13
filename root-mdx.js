import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Headings,
  Code,
  Blockquote,
  Example,
  PrismSetup,
} from './src/components/Complete'

// const Testing = ({ children }) => {
//   return <div className="code">{children}</div>
// }

const components = {
  h3: () => <span>ciao bella</span>,
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
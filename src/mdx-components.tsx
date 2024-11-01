import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}

// Referencing MDX in JSX (frontmatter metadata)
// Frontmatter: YAML-like key-value pairing -> store data about a page
/*
import BlogPost, { metadata } from './path/to/post.mdx'
^ Is 'BlogPost' just arbitary object (JSX component)?
node and globby can read MDX pages and extract metadata
*/
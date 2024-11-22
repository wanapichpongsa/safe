import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (children) => (
      <h1 className="text-center text-4xl font-bold leading-loose" {...children} />
    ),
    h2: (children) => (
      <h2 className="text-center text-2xl font-bold leading-loose" {...children} />
    ),
    h3: (children) => (
      <h3 className="text-center text-xl font-bold leading-loose" {...children} />
    ),
    p: (children) => (
      <p className="text-left leading-relaxed whitespace-pre-wrap" {...children} />
    ),
    a: (children) => (
      <a className="text-center hover:underline" {...children} />
    ),
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
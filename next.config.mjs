import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    // using mjs because remark & rehype ESM only
    remarkPlugins: [], // markdown tools
    rehypePlugins: [], // html tools for markdown
  },
});

// this merges mdx config with next config
export default withMDX(nextConfig);

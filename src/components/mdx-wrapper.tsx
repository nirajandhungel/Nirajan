import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from './mdx-components';
import { ReactNode } from 'react';

interface MDXWrapperProps {
  children: ReactNode;
}

export function MDXWrapper({ children }: MDXWrapperProps) {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}

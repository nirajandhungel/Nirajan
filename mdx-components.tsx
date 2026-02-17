import { mdxComponents } from '@/components/mdx-components';

export function useMDXComponents(components: Record<string, React.ComponentType<any>>): Record<string, React.ComponentType<any>> {
  return {
    ...mdxComponents,
    ...components,
  };
}

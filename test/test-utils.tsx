import {render} from '@testing-library/react-native';
import React, {ReactChildren, ReactElement} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

type wrapperProps = {
  children: ReactChildren;
};

type Options = Parameters<typeof render>[1];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

const AllTheProviders: React.FC<wrapperProps> = ({children}: wrapperProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};

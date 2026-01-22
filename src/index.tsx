import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import 'antd/dist/reset.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root'),
);

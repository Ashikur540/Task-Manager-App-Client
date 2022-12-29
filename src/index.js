import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'; //
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './Contexts/AuthProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </QueryClientProvider>
);


reportWebVitals();

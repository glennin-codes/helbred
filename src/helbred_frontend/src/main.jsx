import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { ThirdwebProvider } from "thirdweb/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <ThirdwebProvider>
      <App />
      </ThirdwebProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

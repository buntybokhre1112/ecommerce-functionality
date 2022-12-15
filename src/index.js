import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { AppProvider } from './context/productContext';
import { FilterContextProvider } from './context/filter_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider> {/* 04 */}
     <FilterContextProvider>{/* 18 */}
      <App />
     </FilterContextProvider>
  </AppProvider>
);



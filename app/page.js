import React, {StrictMode} from 'react';
import App from './components/App';

/**
 * Root function.
 * @return {React.ReactElement} Web app.
 */
export default function Home() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

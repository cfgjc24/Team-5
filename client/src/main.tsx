import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< Updated upstream
    <App />
  </StrictMode>,
)
=======
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);
>>>>>>> Stashed changes

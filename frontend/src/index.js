import {createRoot} from 'react-dom/client';
import App from './App';
import Header from "./components/Header";
import RecipeIndex from './components/RecipeIndex';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/RecipeIndex" element={<RecipeIndex />} />
    </Routes>
  </BrowserRouter>
);
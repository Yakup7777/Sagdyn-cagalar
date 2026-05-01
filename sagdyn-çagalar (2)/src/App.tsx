import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageSelection from './pages/LanguageSelection';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Tuina from './pages/Tuina';
import Diseases from './pages/Diseases';
import QnA from './pages/QnA';

function AppContent() {
  const { isLanguageSelected } = useLanguage();

  if (!isLanguageSelected) {
    return <LanguageSelection />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="tuina" element={<Tuina />} />
        <Route path="diseases" element={<Diseases />} />
        <Route path="qa" element={<QnA />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

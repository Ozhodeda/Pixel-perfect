import './assets/style/main.scss';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { AppHeader } from './cmp/AppHeader';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <Router>
      <section className='main-layout'>
        <AppHeader />
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
            {/* <Route element={<AboutPage />} path="/about" />
            <Route element={<ContactPage />} path="/contact" /> */}
          </Routes>
        </main>
        {/* <AppFooter /> */}
      </section>
    </Router>
  )
}






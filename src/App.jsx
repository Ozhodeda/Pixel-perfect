import './assets/style/main.scss';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

export function App() {
  return (
    <Router>
      <section className='main-layout'>
        <AppHeader />
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<ContactPage />} path="/contact" />
          </Routes>
        </main>
        <AppFooter />
      </section>
    </Router>
  )
}






import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import About from './components/About'
import Recognition from './components/Recognition'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Recognition />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Advocate Sunil Chandran & Associates. All rights reserved.</p>
          <div className="text-sm text-neutral-500">Designed with a modern, minimalist aesthetic.</div>
        </div>
      </footer>
    </div>
  )
}

export default App

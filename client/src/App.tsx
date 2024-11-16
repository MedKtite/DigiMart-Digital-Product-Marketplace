
import './App.css'
import Navbar from './components/Navbar.tsx'
import SearchBar from './components/SearchBar.tsx'
import TopHeader from './components/TopHeader.tsx'
import AppRoutes from './pages/routes/AppRoutes.tsx'
import Home from './pages/Home.tsx'

function App() {


  return (
    <>
    {/* Top header */}
    <TopHeader />
    <Navbar />
    <SearchBar />
    <Home />
    <AppRoutes />

    </>
  )
}

export default App

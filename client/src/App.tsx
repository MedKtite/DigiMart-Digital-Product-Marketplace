import './App.css'
import Navbar from './components/Navbar.tsx'
import SearchBar from './components/SearchBar.tsx'
import TopHeader from './components/TopHeader.tsx'
import AppRoutes from './pages/routes/AppRoutes.tsx'
import Home from './pages/Home.tsx'

function App() {
  return (
    <div id="root">

        <TopHeader />
        <Navbar />
        <SearchBar />
        <Home />
        <AppRoutes />

    </div>
  )
}

export default App
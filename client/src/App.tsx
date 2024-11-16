
import './App.css'
import Navbar from './components/Navbar.tsx'
import TopHeader from './components/TopHeader.tsx'
import AppRoutes from './pages/routes/AppRoutes.tsx'

function App() {


  return (
    <>
    {/* Top header */}
    <TopHeader />
    <Navbar />
    <AppRoutes />

    </>
  )
}

export default App

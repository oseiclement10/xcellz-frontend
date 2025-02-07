import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Mainlayout from './layout/Mainlayout'

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path='/' element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>

  )
}

export default App

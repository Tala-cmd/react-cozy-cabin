import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import GlobalStyles from './styles/GlobalStyles'
import Account from '../src/pages/Account'
import Bookings from '../src/pages/Bookings'
import Cabins from '../src/pages/Cabins'
import Dashboard from '../src/pages/Dashboard'
import Login from '../src/pages/Login'
import PageNotFound from '../src/pages/PageNotFound'
import Settings from '../src/pages/Settings'
import Users from '../src/pages/Users'

function App() {
  return (
    <>
    <GlobalStyles />
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to='dashboard' />}  /> 
        <Route path='/dashboard' element={<Dashboard />}  /> 
        <Route path='/bookings' element={<Bookings />}  /> 
        <Route path='/cabins' element={<Cabins />}  />
        <Route path='/users' element={<Users />}  />
        <Route path='/settings' element={<Settings />}  />
        <Route path='/account' element={<Account />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='*' element={<PageNotFound />}  />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App

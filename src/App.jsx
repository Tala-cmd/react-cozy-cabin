import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import GlobalStyles from './styles/GlobalStyles'
import Account from '../src/pages/Account'
import Bookings from '../src/pages/Bookings'
import Cabins from '../src/pages/Cabins'
import Dashboard from '../src/pages/Dashboard'
import Login from '../src/pages/Login'
import PageNotFound from '../src/pages/PageNotFound'
import Settings from '../src/pages/Settings'
import Users from '../src/pages/Users'
import AppLayout from "./ui/AppLayout"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 60 * 1000,
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='dashboard' />}  /> 
            <Route path='/dashboard' element={<Dashboard />}  /> 
            <Route path='/bookings' element={<Bookings />}  /> 
            <Route path='/cabins' element={<Cabins />}  />
            <Route path='/users' element={<Users />}  />
            <Route path='/settings' element={<Settings />}  />
            <Route path='/account' element={<Account />}  />
          </Route>
            <Route path='/login' element={<Login />}  />
            <Route path='*' element={<PageNotFound />}  />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

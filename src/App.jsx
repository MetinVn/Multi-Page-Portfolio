import Navbar from './components/Navbar'
import Account from './pages/Account'
import Signin from './pages/Signin'
import { Routes,Route } from 'react-router-dom'
import { AuthContextProvider } from './context/Protect'
import Protected from './components/Protected'
function App() {

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/*" element={<Navbar />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App


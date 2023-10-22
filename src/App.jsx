import TechnicalIssue from './assets/technical-issue.svg'
import HomePage from "./pages/HomePage";
import UserManagement from "./pages/UserManagement";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import Roles from './components/Roles';

function App() {

  return (
    <>
    <div className="hidden lg:block">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserManagement />} >
          <Route index element={<Users />} />
          <Route path='roles' element={<Roles />} />
        </Route>
      </Routes>
    </div>
    <div className="lg:hidden flex flex-col justify-center items-center">
      <img src={TechnicalIssue} className="md:w-3/4" />
      <h4 className="text-5xl md:w-3/4 text-center">Sorry! But this website is not supported on small screens</h4>
    </div>
    </>
  )
}

export default App

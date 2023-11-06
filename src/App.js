import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/homepage/Homepage";
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';

import { LoginForm } from './components/login/Login.comp';
import { ResetPassword } from './components/password-reset/PasswordReset.comp';
import { Entry } from './pages/entry/Entry.page';
import { EntryAgent } from './pages/entry/EntryA.page';
import { EntryAdmin } from './pages/entry/EntryAdmin.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <HashRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/client-login" element={<Entry />} />
    <Route path="/agent-login" element={<EntryAgent />} />
    <Route path="/admin-login" element={<EntryAdmin />} />
    <Route path="/forget-password" element={<ResetPassword />} />
    </Routes>
  </HashRouter>
    </div>

  //   <div className="App">
  //   { /* <Homepage /> */}
  //     {/* <Entry /> */}
  //      <DefaultLayout>
      
  //       <Dashboard />
  //       <AddTicket />
  // </DefaultLayout>
  //   </div>
  );
}

export default App;

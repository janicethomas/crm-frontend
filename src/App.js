import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/homepage/Homepage";
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { DashboardClient } from './pages/dashboard/DashboardClient.page';

// import { LoginForm } from './components/login/Login.comp';
import { ResetPassword } from './components/password-reset/PasswordReset.comp';
import { Entry } from './pages/entry/Entry.page';
import { EntryAdmin } from './pages/entry/EntryA.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { AddTicketClient } from './pages/new-ticket/AddTicketClient.page';
import { AddUser } from './pages/new-user/AddUser.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { TicketListsClient } from './pages/ticket-list/TicketListsClient.page';
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';
import { Ticket } from './pages/ticket/Ticket.page';
import { UserLists } from './pages/user-list/UserList';
import { User } from './pages/user/User.page';
import { UpdateTicket } from './pages/update-ticket/UpdateTicket.page';
import { UpdateTicketClient } from './pages/update-ticket/UpdateTicketClient.page';
import { UpdateUser } from './pages/update-user/UpdateUser.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/client-login" element={<Entry />} />
          <Route path="/admin-login" element={<EntryAdmin />} />
          <Route path="/forget-password" element={<ResetPassword/>}/>
            <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
            <Route path="/dashboard-client" element={<PrivateRoute Component={DashboardClient} />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/add-ticket" element={<PrivateRoute Component={AddTicket} />} />
            <Route path="/add-ticket-client" element={<PrivateRoute Component={AddTicketClient} />} />
            <Route path="/tickets" element={<PrivateRoute Component={TicketLists} />} />
            <Route path="/tickets-client" element={<PrivateRoute Component={TicketListsClient} />} />
            {/* <Route path="/tickets" element={<TicketLists />} /> */}
            <Route path="/ticket/:tId" element={<PrivateRoute Component={Ticket} />} />
            {/* <Route path="/ticket/:tId" element={<Ticket />} /> */}
            {/* <Route path="/users" element={<UserLists />} />
            <Route path="/user/:uId" element={<User />} /> */}
            <Route path="/add-user" element={<PrivateRoute Component={AddUser} />} />
            <Route path="/users" element={<PrivateRoute Component={UserLists} />} />
            <Route path="/user/:uId" element={<PrivateRoute Component={User} />} />
            <Route path="/update-ticket/:id" element={<PrivateRoute Component={UpdateTicket} />} />
            <Route path="/update-ticket-client/:id" element={<PrivateRoute Component={UpdateTicketClient} />} />
            <Route path="/update-user/:id" element={<PrivateRoute Component={UpdateUser} />} />
            {/* <Route path="/update-ticket/:id" element={<UpdateTicket />} /> */}
        </Routes>
      </BrowserRouter>
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

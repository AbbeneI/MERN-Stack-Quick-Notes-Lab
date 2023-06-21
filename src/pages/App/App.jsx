import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
// import NotesPage from '../NotesPage/NotesPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
{/* <Route path="/notes" element={<NotesPage />} /> */ }

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/notes/new" element={<NewNoteForm user={user} />} />

          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

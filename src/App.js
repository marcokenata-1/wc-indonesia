import { Outlet } from 'react-router-dom';
import './App.css';
import AppBarWC from './components/appbar/AppBarWC';

function App() {
  return (
    <>
      <AppBarWC />
      <Outlet />
    </>
  );
}

export default App;

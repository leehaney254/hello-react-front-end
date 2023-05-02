import { Route, Routes } from 'react-router-dom';
import Greeting from './pages/Greeting';
import { useDispatch } from 'react-redux';
import { fetchGreeting } from "../src/store/greetings/greeting";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  )
}

export default App

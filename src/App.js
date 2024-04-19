import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import CompletedTask from './Components/Pages/CompletedTask/CompletedTask';
import AllTasks from './Components/Pages/AllTasks';
import InProgressTasks from './Components/Pages/InProgressTask/InProgressTasks';

function App() {
  return (
    <div className="app">
      <Header />
      <Content/>
      <Routes>
        <Route path="/" element={<AllTasks/>}/>
        <Route path="/completedtask" element={<CompletedTask/>}/>
        <Route path="/progresstask" element={<InProgressTasks/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='appWrapper'>
    <div className="app">
      <Header />
      <Content/>
      <Footer />
    </div>
    </div>
  );
}

export default App;

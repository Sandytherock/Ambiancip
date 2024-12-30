import './App.css';
// import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Athletics from './components/Athletics/Athletics';
import ResearchAndInnovationMain from './components/ResearchandInnovation/ResearchandInnovationMain'
// import ResearchandNewsMain from './components/ResearchandNews/ResearchandNewsMain.jsx';
// import ResearchandEnterpriseMain from './components/ResearchandEnterprise/ResearchandEnterpriseMain.jsx';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/athletics-and-recreation" element={<Athletics />} />
        </Routes>
        <Routes>
          <Route path="/research-and-innovation" element={<ResearchAndInnovationMain />} />
        </Routes>
        {/* <Routes>
          <Route path="/research-and-innovation/research-news" element={<ResearchandNewsMain />} />
        </Routes>
        <Routes>
          <Route path="/research-and-innovation/research-enterprise" element={<ResearchandEnterpriseMain/>} />
        </Routes> */}
      </main>
    </Router>
  );
}

export default App;

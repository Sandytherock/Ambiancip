import './App.css';
// import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Athletics from './components/Athletics/Athletics';
import ResearchAndInnovationMain from './components/ResearchandInnovation/ResearchandInnovationMain'
// import ResearchandNewsMain from './components/ResearchandNews/ResearchandNewsMain.jsx';
// import ResearchandEnterpriseMain from './components/ResearchandEnterprise/ResearchandEnterpriseMain.jsx';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Policies from './components/Policies/Policies';
import Facts from './components/Facts/Facts';
import Universityvalue from './components/Universityvalue/Universityvalue';
import Admissions from './components/Admissionsandaid/Admissionsandaid';

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
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Routes>
          <Route path='/faq' element={<Faq/>}/>
        </Routes>
        <Routes>
          <Route path='/policies' element={<Policies/>}/>
        </Routes>
        <Routes>
          <Route path='/facts' element={<Facts/>}/>
        </Routes>
        <Routes>
          <Route path='/university-values' element={<Universityvalue/>}/>
        </Routes>
        <Routes>
          <Route path='/admissions' element={<Admissions/>}/>
        </Routes>
        
      </main>
    </Router>
  );
}

export default App;

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage'
import ResearchAndInnovationMain from './components/ResearchandInnovation/ResearchandInnovationMain'
import About from './components/About/About'
import Faq from './components/Faq/Faq'
import Policies from './components/Policies/Policies'
import Facts from './components/Facts/Facts'
import Universityvalue from './components/Universityvalue/Universityvalue'
import Admissions from './components/Admissionsandaid/Admissionsandaid'
import Arts from './components/Art&Culture/Arts'
import GlobalInitiatives from './pages/GlobalInitiatives'
import OffCampusLearning from './pages/OffCampusLearning'
import OnlineLearning from './pages/OnlineLearning'
import Interdisciplinary from './pages/Interdisciplinary'
import Athletics from './components/Athletics/Athletics'
import GroupsOrganizations from './components/Groups & Organizations/GroupsOrganizations'
import Houseing from './components/Houseinganddining/Houseing'
import ResearchandNewsMain from './components/ResearchandNews/ResearchandNewsMain'
import ResearchandEnterpriseMain from './components/ResearchandEnterprise/ResearchandEnterpriseMain'
import HealthandWellness from './components/HealthandWellness/HealthandWellness'
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
        <Routes>
          <Route path="/research-news" element={<ResearchandNewsMain />} />
        </Routes>
        <Routes>
          <Route path="/research-enterprise" element={<ResearchandEnterpriseMain />} />
        </Routes>
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
        <Routes>
          <Route path='/arts' element={<Arts/>}/>
        </Routes>
        <Routes>
          <Route path='/global-initiatives' element={<GlobalInitiatives/>}/>
        </Routes>
        <Routes>
          <Route path='/off-campus-learning' element={<OffCampusLearning/>}/>
        </Routes>
        <Routes>
          <Route path='/online-learning' element={<OnlineLearning/>}/>
        </Routes>
        <Routes>
          <Route path='/interdisciplinary' element={<Interdisciplinary/>}/>
        </Routes>
        <Routes>
          <Route path='/athletics' element={<Athletics/>}/>
        </Routes>
        <Routes>
          <Route path='/groups-and-organizations' element={<GroupsOrganizations/>}/>
        </Routes>
        <Routes>
          <Route path='/housing-and-dining' element={<Houseing/>}/>
        </Routes>
        <Routes>
          <Route path='/health-wellness' element={<HealthandWellness/>}/>
        </Routes>
        
      </main>
    </Router>
  );
}

export default App;

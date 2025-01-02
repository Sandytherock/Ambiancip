import CollapsibleSection from '../CollapsibleSection/CollapsibleSection'
import './MainContext.css'

export default function MainContent() {
  return (
    <main className="main-content">
      <p className="intro-text">
        The <a href="#">Penn Center for Innovation</a> is the University's innovation, 
        venture creation, and commercialization center. It provides infrastructure, 
        leadership, and resources needed to transfer promising Penn inventions, 
        know-how, and related assets into the marketplace for the public good. 
        PCI transforms the Philadelphia region's capacity to support an ecosystem 
        of innovative entrepreneurs, companies, and workers all making essential 
        contributions to our collective economic future.
      </p>

      <CollapsibleSection 
        title="PCI Ventures"
        isOpen={true}
        content={
          <p>
            <a href="#">PCI Ventures</a> is dedicated to supporting technology 
            commercialization within the Penn community. Since 2010, PCIV has 
            worked with more than 200 faculty and staff members to form and 
            launch new companies based on selected inventions and innovative 
            technologies.
          </p>
        }
      />

      <CollapsibleSection 
        title="For Industry"
        content={<div>Industry content goes here</div>}
      />

      <CollapsibleSection 
        title="Available Technologies"
        content={<div>Technologies content goes here</div>}
      />
    </main>
  )
}


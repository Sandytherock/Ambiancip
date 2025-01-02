import { useState } from 'react'
import './CollapsibleSection.css'

export default function CollapsibleSection({ title, content, isOpen = false }) {
  const [isExpanded, setIsExpanded] = useState(isOpen)

  return (
    <div className={`collapsible-section ${isExpanded ? 'expanded' : ''}`}>
      <button 
        className="section-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2>{title}</h2>
        <span className="toggle-icon">{isExpanded ? '−' : '+'}</span>
      </button>
      {isExpanded && (
        <div className="section-content">
          {content}
        </div>
      )}
    </div>
  )
}


import {useState} from 'react'
import Navbar from './Navbar'
import CheckboxTree from './CheckboxTree'
import './App.css'

export default function App() {
  const [page, setPage] = useState('about')

  const renderContent = () => {
    switch (page) {
      case 'about':
        return <p>We are a company passionate about technology.</p>
      case 'services':
        return (
          <ul>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Cloud Solutions</li>
          </ul>
        )
      case 'contact':
        return <p>Contact us at contact@company.com</p>
      default:
        return null
    }
  }

  return (
    <div className="app">
      <Navbar setPage={setPage} />
      <main className="content">
        <h2>{page.charAt(0).toUpperCase() + page.slice(1)}</h2>
        {renderContent()}
        <h3>Category Selection</h3>
        <CheckboxTree />
      </main>
    </div>
  )
}

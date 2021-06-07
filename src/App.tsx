import { IconContext } from 'react-icons'

import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export default function App() {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <main>
        <RepositoryList />
      </main>
    </IconContext.Provider>
  )
}

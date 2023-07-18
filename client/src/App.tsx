import { Outlet } from 'react-router-dom'
import { Button } from 'primereact/button'
import logo from './assets/logo.svg'

export const App = () => {
  return (
    <div className="flex flex-column">
      <div className="flex my-3 gap-3" ali>
        <a>Menu Item One</a>
        <img src={logo} style={{ width: 150, height: 50 }} />
        <a>two</a>
      </div>
      <Button className="mx-auto">Click Me</Button>
      <Outlet />
    </div>
  )
}

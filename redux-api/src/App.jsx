import NavBar from './components/NavBar'
import UserList from './components/UserList'

//REDUX
import {Provider as ReduxProvider} from 'react-redux'
import store from './REDUX/store'

function App() {
 

  return (
    <ReduxProvider store={store}>
      <NavBar/>
      <UserList/>
    </ReduxProvider>
  )
}

export default App

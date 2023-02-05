import {
  RouterProvider,
} from "react-router-dom";
import router from "./router";
import './App.css'
import {
  RecoilRoot
} from 'recoil';

function App() {
  let user = {
    name: 'Whick',
    firstname: 'Jhon',
    address: '221 B',
    phoneNumber: '0403125',
    email:'jhonWhick@reef.com'
  }
  window.localStorage.setItem('user', JSON.stringify(user))
  
  return (
    <RecoilRoot>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </RecoilRoot>
  )
}

export default App

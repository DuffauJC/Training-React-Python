import {
  RouterProvider,
} from "react-router-dom";
import router from "./router";
import './App.css'
import { useEffect } from "react";
import {
  RecoilRoot
} from 'recoil';

function App() {

  useEffect(() => {

  }, [])

  return (
    <RecoilRoot>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </RecoilRoot>
  )
}

export default App

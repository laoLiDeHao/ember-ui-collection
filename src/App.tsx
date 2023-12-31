// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header01 from './pages/Header01/index.jsx'
import Header02 from './pages/Header02/index.jsx'
BrowserRouter
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header02 />}></Route>
        <Route path='/Header01' element={<Header01 />}></Route>
        <Route path='Header02' element={<Header02/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

// function DefHomepage() {

//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

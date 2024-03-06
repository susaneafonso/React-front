// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
// )

///novo model
import { createRoot } from 'react-dom/client'
import App from "./App"
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App/>)


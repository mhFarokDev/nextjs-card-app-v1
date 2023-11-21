"use client"
import { Provider } from 'react-redux'
import store from "@/store/store"


import './globals.css'
import Link from 'next/link'



export default function RootLayout({ children }) {
  
  

  return (
    <html lang="en">
      <body >
        <div className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/counter">Counter</Link></li>
          </ul>
        </div>
          <Provider store={store}>
            {children}
          </Provider>
        </body>
    </html>
  )
}

import React from 'react'

export default function Header({ children }) {
  return (
    <header
      style={{
        backgroundColor: 'tomato',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      {children}
    </header>
  )
}

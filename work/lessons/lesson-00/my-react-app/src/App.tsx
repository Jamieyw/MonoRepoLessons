import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false)
  const [text, setText] = useState('')

  return (
    <div 
      className="App"
      style={{
        backgroundColor: isDark ? '#282c34' : '#f0f0f0',
        color: isDark ? 'white' : '#282c34',
        minHeight: '100vh',
        padding: '40px 20px'
      }}
    >
      <header 
        className="App-header"
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        <h1 style={{ marginBottom: '10px', fontSize: '2.5rem' }}>
          Welcome to CS 5500!
        </h1>
        
        <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
          I'm Jamie. This is my first React Vite TypeScript project.
        </p>
        
        <div style={{ marginBottom: '30px' }}>
          <button 
            onClick={() => setCount(count + 1)}
            style={{
              padding: '12px 24px',
              margin: '10px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#4CAF50',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Count: {count}
          </button>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            style={{
              padding: '12px 24px',
              margin: '10px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#2196F3',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Switch to {isDark ? 'Light' : 'Dark'} Theme
          </button>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type something ...'
            style={{
              padding: '12px 16px',
              fontSize: '16px',
              border: isDark ? '1px solid #555' : '1px solid #ccc',
              borderRadius: '6px',
              backgroundColor: isDark ? '#444' : 'white',
              color: isDark ? 'white' : '#282c34',
              width: '300px',
              maxWidth: '100%'
            }}
          />
        </div>
        
        <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
          You typed: {text}
        </p>
      </header>
    </div>
  )
}

export default App
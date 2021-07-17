import React, { useState, useEffect } from 'react';
import Editor from './Editor'

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
    `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="file-explorer">
        <Editor language="xml" displayName="index.html" value={html} onChange={setHtml} />
        <Editor language="css" displayName="index.css" value={css} onChange={setCss} />
        <Editor language="javascript" displayName="index.js" value={js} onChange={setJs} />
      </div>
      <div className="live-server">
        <iframe
          srcDoc={srcDoc}
          title="live-server"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
import React, { useState, lazy, Suspense } from 'react'

const Warning = lazy(async () => ({
  default: (await import(/* webpackChunkName: "other" */ './Warning')).Warning,
}))

export const App = () => {
  const [count, setCount] = useState(0)

  const loading = () => <p>Loading...</p>

  return (
    <>
      <h1>Github App</h1>

      {count > 10 && (
        <Suspense fallback={loading}>
          <Warning />
        </Suspense>
      )}
    </>
  )
}

import React from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorFallback: React.FC<FallbackProps> = ({ resetErrorBoundary }) => {
  return (
    <div role='alert' style={{ padding: '20px', border: '1px solid red', borderRadius: '5px' }}>
      <h3>Something went wrong:</h3>
      {/* resetErrorBoundary provides an automated DX way to clear state and retry */}
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

export default ErrorFallback

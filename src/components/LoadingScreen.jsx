import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 1200)
    const completeTimer = setTimeout(() => onComplete(), 1600)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className={`loader ${exiting ? 'loader--exit' : ''}`} aria-hidden="true">

      <div className="loader-symbol">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Java"
        >

          {/* Steam */}
          <path
            d="M22 20C18 16 24 13 21 9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M32 20C28 16 34 13 31 9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M42 20C38 16 44 13 41 9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Coffee cup */}
          <path
            d="M15 25H47V43C47 50 42 55 35 55H27C20 55 15 50 15 43V25Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Cup top */}
          <path
            d="M15 25H47"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Handle */}
          <path
            d="M47 30H51C55 30 57 33 57 37C57 41 55 44 51 44H47"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />

        </svg>
      </div>

      <div className="loader-track">
        <div className="loader-progress" />
      </div>

    </div>
  )
}
import { useState, useEffect, useCallback } from 'react'
import Home from './layouts/Home'
import ComingSoonModal from './components/modal/ComingSoonModal'

const STORAGE_KEY = 'tradesift_preview_shown'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    try {
      const alreadyShown = localStorage.getItem(STORAGE_KEY) === 'true'
      if (!alreadyShown) {
        setModalOpen(true)
        localStorage.setItem(STORAGE_KEY, 'true')
      }
    } catch {
      // localStorage unavailable – show once per session
      setModalOpen(true)
    }
  }, [])

  const handleClose = useCallback(() => setModalOpen(false), [])

  return (
    <>
      <ComingSoonModal isOpen={modalOpen} onClose={handleClose} />
      <Home/>
    </>
  )
}

export default App

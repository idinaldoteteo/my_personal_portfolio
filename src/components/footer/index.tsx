
import { useEffect, useState } from 'react'
import styles from './Footer.module.css'
import Button from '../button'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const header = document.getElementById('page-header')

    if (header) {
      const observer = new IntersectionObserver(([entry]) => {
        setShowBackToTop(!entry.isIntersecting)
      })

      observer.observe(header)

      return () => observer.disconnect()
    }

  }, [])

  return (
    <footer>
      <div className={styles.buttonTop}>
        {showBackToTop && (
          <Button
            variant='backToTop'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Back to top
          </Button>
        )}
      </div>
      <div className={styles.footer}>
        <p className={styles.title}>® Developed by Idinaldo Teteo</p>
      </div>
    </footer>
  )
}

export default Footer
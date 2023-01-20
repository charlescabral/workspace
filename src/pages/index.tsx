import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>Charles Cabral</h1>
          <p>Front-end Developer</p>
          <a href="mailto:charles.cabral.neto@gmail.com">charles.cabral.neto@gmail.com</a>
        </div>
      </main>
    </>
  )
}

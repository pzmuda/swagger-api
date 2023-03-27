import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Users from './components/organisms/Users/Users'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Page</h1>
      <Users/>
    </main>
  )
}

import Link from 'next/link'
import styles from './NotFound.module.css' // Assuming you have a CSS module for styling

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.errorCode}>404</h1>
            </div>
            <div className={styles.right}>
                <p className={styles.errorMessage}>The page you are looking for does not exist. Please make sure you have entered the correct address.</p>
                
                <Link className='underline' href="/">
                    Go home
                </Link>
            </div>
        </div>
    )
}
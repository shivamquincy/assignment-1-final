import Link from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Your existing content here */}

      {/* Get Started button */}
      <div className={styles.getStartedContainer}>
        <div className={styles.getStartedButton}>
             <a href="/Signup"className={styles.getStartedLink}>Get Started</a>

        </div>
        <p className={styles.helloText}>Hello there</p>
        <div className={styles.astronautImage}>
          <Image src="/astronaut.png" alt="Astronaut" width={500} height={500} />
        </div>
      </div>
    </main>
  );
}


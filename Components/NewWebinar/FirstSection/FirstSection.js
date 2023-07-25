import React from 'react'
import styles from "./FirstSection.module.css"
import Link from 'next/link'

function FirstSection() {
  return (
    <section className={styles.container}>
        <div className={styles.Button}>
        <Link href="/thank-you-webinar">
            <button>Register Now</button>
            </Link>
        </div>
    </section>
  )
}

export default FirstSection
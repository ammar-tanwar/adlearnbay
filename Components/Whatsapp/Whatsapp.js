import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import styles from './Whatsapp.module.css'



function Whatsapp() {
  return (
    <section className={styles.Whatsapp}>
      <a href="https://api.whatsapp.com/send?phone=919606950936&text=" target={"_blank"}><RiWhatsappFill className={styles.Wicon} /></a>
    </section>
  )
}

export default Whatsapp

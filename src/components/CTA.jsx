import styles from "../style"
import Button from "./Button"

const CTA = () =>  (
    <section className={`bg-black-gradient-2 rounded-[20px] flex sm:flex-row flex-col items-center justify-between ${styles.marginY} ${styles.paddingX} ${styles.paddingY}`}>
      <div className={``}>
        <h2 className={styles.heading2}>
        Let’s try our service now!
        </h2>

        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
        
      </div>

      <div>
        <Button/>
      </div>
      
    </section>
  )

export default CTA

import { FaArrowRight, FaGithub } from 'react-icons/fa'
import styles from './page.module.css'
import { GradientButtonBG, GradientButtonBLB, GradientButtonGY, GradientButtonPO, GradientButtonYR } from './components/GradientButtons'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.h1}>Lorem Ipsum</h1>
        <p className={styles.centreText}>
          In consectetur nostrud minim eiusmod sunt non reprehenderit fugiat irure proident cillum qui minim enim. Anim excepteur nulla id proident quis qui. Dolor aliquipadipisicing anim nisi labore reprehenderit id commodo elit commodo nulla sunt velit. Reprehenderit nisi non cupidatat laborum amet.
        </p>
        <div className={styles.row}>
          <GradientButtonBG link="github">
            Github
            <FaGithub style={{paddingLeft: "0.6rem", fontSize: "1rem", translate: "0rem 0.15rem"}}/>
          </GradientButtonBG>
          <GradientButtonYR link="projects">
            Explore Projects
            <FaArrowRight style={{paddingLeft: "0.6rem", translate: "0rem 0.15rem"}}/>
          </GradientButtonYR>
        </div>
      </main>
    </>
  )
}

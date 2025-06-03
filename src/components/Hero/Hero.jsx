import styles from "./Hero.module.css"
import Image from "next/image"
import { useRef, useEffect } from "react"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Hero() {
  const wheelRef = useRef()

  GSAP.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const wheel = wheelRef.current
    const timeLine = GSAP.timeline({
      scrollTrigger: {
        trigger: wheel,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    timeLine.to(wheel, {
      rotation: -30,
    })
  }, [])

  return (
    <>
      <div className={`${styles.heroWrapper}`} id="hero">
        <div className={styles.heroBgContainer}>
          <Image
            src={`${prefix + "/Hero/hero-bg.svg"}`}
            priority
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={`${styles.hero}`}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroMain}>
              <h1>Summer of Innovation 2025</h1>
              <div className={styles.heroQuoteWrapper}>
                <div className={styles.styleBar}></div>
                <div className={styles.Quote}>This Summer conquer your fallacies and carve your finesse.</div>
              </div>
            </div>
            <div className={styles.heroArtWrapper}>
              <Image src={`${prefix + "/Hero/hero-art.svg"}`} fill priority />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutWheelWrapper} ref={wheelRef}>
          <Image
            src={`${prefix + "/Events/Blue_Wheel_Spcok.svg"}`}
            fill
            priority
          />
        </div>
        <div className={`page-wrapper`}>
          <div className={styles.aboutMain}>
            <div className={styles.aboutStyleStar}>
              <Image src={`${prefix + "/Hero/style-star.svg"}`} fill priority />
            </div>
            <div className={styles.aboutTitle}>
              <h1>Overview</h1>
            </div>
            <div className={styles.aboutContent}>
              <div style={{padding: 10}}>
                <center> <h3> Welcome to the sixth edition of Summer of Innovation! </h3> </center>
              </div>

              <div style={{padding: 10}}>
                <p> Get ready to ignite your creativity and problem-solving skills as we kick off an exciting competition where students will have the opportunity to work on challenges brought forth by our technical clubs.
                Over the course of two months, you will have the chance to collaborate with peers, learn new techniques, and showcase your abilities as you tackle the problem statements released by our clubs. Whether you&apos;re interested in coding, robotics, design, or any other technical field, there&apos;s a challenge waiting for you to sink your teeth into.
                Join us this summer as we push the boundaries of innovation. Let&apos;s make this summer one to remember!
                </p>
              </div>
                <center> <h3> Are you ready to rise to the challenge? Let the Summer of Innovation begin! </h3> </center>
            </div>
          </div>
        </div>
        <div className={styles.aboutBgWrapper}>
          <Image
            src={`${prefix + "/Hero/hero-bg-2.svg"}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </>
  )
}

import Image from "next/image"
import GSAP from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"
import styles from "./Events.module.css"
import EventCard from "./EventCard/EventCard"
import EventsData from "./data"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Events() {
  const SunRef = useRef()

  GSAP.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const Sun = SunRef.current
    const timeLine = GSAP.timeline({
      scrollTrigger: {
        trigger: Sun,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    timeLine.to(Sun, {
      rotation: 30,
    })
  }, [])

  return (
    <>
      <div id="eventsId" className={styles.eventsWrapper}>
        <div className={styles.eventSunWrapper} ref={SunRef}>
          <Image src={prefix + "/Events/events-sun-1.svg"} fill priority />
        </div>
        <div className={`${styles.eventsMain} page-wrapper`}>
          <div className={styles.eventsHeading}>
            <div className={styles.text_block}>
              <h2>Events</h2>
            </div>
          </div>
          <div className={styles.eventsCardWrapper}>
            {EventsData.map((data, index) => {
              return (
                <EventCard
                  data={data}
                  key={index}
                  number={index + 1}
                  leftSideImage={index % 2 ? false : true}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

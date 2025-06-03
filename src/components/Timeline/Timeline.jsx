import styles from "./Timeline.module.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import timeLineData from "./timeline_data"
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faFireFlameCurved,
  faBrain,
  faRobot,
  faRocket,
  faArrowTrendUp,
  faQuestion,
  faPaintbrush
} from "@fortawesome/free-solid-svg-icons"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Timeline() {
  const icons = {
    Ques:faQuestion,
    Design: faPaintbrush,
    Coding: faCode,
    AI: faBrain,
    Robotics: faRobot,
    SDS: faRocket,
    Motorsports: faFireFlameCurved,
    Finance: faArrowTrendUp,
  }
  return (
    <>
      <div
        className={styles.timelineWrapper}
        id="timeline"
        style={{
          backgroundImage: `url(${prefix}/Timeline/inspiration-geometry.png)`,
        }}
      >
        <div className={`${styles.timelineMain} page-wrapper`}>
          <div className={styles.timelineHeading}>
            <div className={styles.text_block}>
              <h2>Timeline</h2>
            </div>
          </div>
          <div className={styles.verticalTimelineMain}>
            <VerticalTimeline>
              {timeLineData.map((data, index) => {
                return (

                  <VerticalTimelineElement
                    key={index}
                    date={data.date}
                    dateClassName="date"
                    className={`${
                      data.key / 2 ? "timeline-right" : "timeline-left"
                    }`}
                    iconStyle={{ backgroundColor: data.color }}
                    icon={<a href={data.secretLink} style={{color: data.secretColor}}><FontAwesomeIcon icon={icons[data.icon]} /></a>}
                  >

                    <h2 className="vertical-timeline-element-title">
                      {data.title}
                    </h2>

                    <h3 style={{color: '#aaa', fontStyle: 'italic'}} className="vertical-timeline-element-subtitle">
                      {data.location}
                    </h3>
                    {data.gifUrl && (
                      <div className={styles.gifContainer}>
                        <img
                          src={data.gifUrl}
                          alt="GIF"
                          className={styles.gif}
                        />
                      </div>
                    )}
                    <p id="description">{data.description}</p>
                  </VerticalTimelineElement>
                )
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  )
}

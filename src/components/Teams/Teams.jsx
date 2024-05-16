import styles from "./Teams.module.css"
import Image from "next/image"
import teamsData from "./data"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Teams() {
  return (
    <div
      className={styles.teamBody}
      style={{
        backgroundImage: `url(${prefix}/Team/cartographer.png)`,
      }}
    >
      <div id="team">
      <div className={`${styles.teamWrapper}`}>
        <div className={styles.teamsContentWrapper}>
          <div className={styles.teamHeaderWrapper}>
            <div className={styles.teamHeader}>
              <h1>Meet the Team</h1>
            </div>
          </div>
          {teamsData.map((team) => (
            <div key={team.name} className={styles.teamContainer}>
              <h2>{team.name}</h2>
              <div className={styles.teamCardWrapper}>
                {team.members.map((member) => (
                  <div key={member.name} className={styles.teamCardContainer}>
                    <div key={member.name} className={styles.teamCard}>
                      <div>
                        <Image
                          src={prefix + member.image}
                          alt={member.name}
                          width={200}
                          height={200}
                          className={styles.memberImage}
                          priority
                        />
                      </div>
                      <div className={styles.memberInfo}>
                        <h3>{member.name}</h3>
                        <div className={styles.memberLinks}>
                          <a
                            href={`mailto:${member.email}`}
                            className={
                              styles.linkImageWrapper + " " + styles.email
                            }
                          >
                            <Image
                              className={styles.linkImage}
                              src={prefix + "/Team/Logo/gmail1.png"}
                              width={20}
                              height={20}
                              priority
                              alt="Team Member Logo"
                            />
                          </a>
                          {member.linkedin && (
                            <a
                              className={
                                styles.linkImageWrapper + " " + styles.linkedin
                              }
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                className={styles.linkImage}
                                src={prefix + "/Team/Logo/linkedin1.png"}
                                width={20}
                                height={20}
                                priority
                                alt="Link Image"
                              />
                            </a>
                          )}
                          {member.twitter && (
                            <a
                              className={
                                styles.linkImageWrapper + " " + styles.twitter
                              }
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                className={styles.linkImage}
                                src={prefix + "/Team/Logo/twitter1.png"}
                                width={20}
                                height={20}
                                priority
                              />
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              className={
                                styles.linkImageWrapper + " " + styles.instagram
                              }
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                className={styles.linkImage}
                                src={prefix + "/Team/Logo/instagram.png"}
                                width={20}
                                height={20}
                                priority
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

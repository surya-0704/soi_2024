import { useEffect, useRef } from "react";
import styles from "./Winners.module.css";
import winnersData from "./data";
import Fireworks from "fireworks-js";

export default function Winners() {
  const fireworksContainerRef = useRef(null);

  useEffect(() => {
    const container = fireworksContainerRef.current;
    if (container) {
      const fireworks = new Fireworks(container, {
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        acceleration: 1.05,
        friction: 0.98,
        gravity: 1.5,
        particles: 100,
      });

      fireworks.start();

      // Stop fireworks after a certain duration
      const timer = setTimeout(() => {
        fireworks.stop();
      }, 5000); // Adjust duration as needed (5000ms = 5 seconds)

      return () => {
        fireworks.stop();
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <div className={styles.winnerBody}>
      <div id="winners">
        <div className={styles.winnerWrapper}>
          <div className={styles.winnersContentWrapper}>
            <div className={styles.fireworksContainer} ref={fireworksContainerRef}>
              <div className={styles.winnerHeader}>
                <h1>Congratulations to the Winners</h1>
              </div>
            </div>
            {winnersData.map((winnerCategory) => (
              <div key={winnerCategory.category} className={styles.winnerContainer}>
                <h2>{winnerCategory.category}</h2>
                <div className={styles.winnerTeamWrapper}>
                  {winnerCategory.teams.map((team) => (
                    <div key={team.teamName} className={styles.winnerTeamContainer}>
                      <h3>{team.teamName}</h3>
                      <ul className={styles.memberList}>
                        {team.members.map((member) => (
                          <li key={member}>{member}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

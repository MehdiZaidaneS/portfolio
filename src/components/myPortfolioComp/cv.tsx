import React from 'react'
import styles from "./cv.module.scss";
import me from "./20211027_153242.jpg"


type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div>
      <div className={styles.columnas}>

          <div className={styles.primeraColumna}>
                <img src={me} alt='' width={200} height={320}></img>
                <div className={styles.name}>
                    <h3>Programming student</h3>
                    <h1>Mehdi Zaidane</h1>
                </div>
          </div>

          <div className={styles.segundaColumna}>
              <div className={styles.columnaIzq}>
                  <h1>·Personal summary:</h1>
                  <p>I'm studying programming at Varia's school. I am specializing in web and application development.</p>
                  <h1>·Contact information:</h1>
                  <div className={styles.info}>
                      <ul>
                      <li>Nationality: Finnish.</li>
                      <li>Birthday: 05/11/2001</li>
                      <li>Address: Potatotie 7 B 2</li>
                      <li>Number: +358 12347890</li>
                      <li>Email: mehdicontacto@gmail.com</li>
                      </ul>
                  </div>
                  <h1>·Languages</h1>
                  <div className={styles.kielet}>
                      <ol>
                      <li> Spanish: Native.</li>
                      <li> English: Excellent.</li>
                      <li> Arabic: Excellent.</li>
                      <li> Finnish: Good.</li>
                      </ol>
                  </div>       
              </div>
              <div className={styles.columnaDerecha}>
                  <h1>Work Experience</h1>

              </div>
          </div>
      </div>
    </div>
  )
}

export default Cv

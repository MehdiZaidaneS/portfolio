import React from 'react'
import styles from "./cv.module.scss";
import me from "../media/20211027_153242.jpg"




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
                  <hr></hr> 
                  <h1>·Personal summary:</h1>
                  <p>I'm studying programming at Varia's school. I am specializing in web and application development.</p>
                  <hr></hr>
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
                  <hr></hr>
                  <h1>·Languages:</h1>
                  <div className={styles.kielet}>
                      <ol>
                      <li> Spanish: Native.</li>
                      <li> English: Excellent.</li>
                      <li> Arabic: Excellent.</li>
                      <li> Finnish: Good.</li>
                      </ol>
                  </div> 
                  <hr></hr>
                  <h1>·Skills:</h1>
                  <div className={styles.kielet}>
                      <ol>
                      <li> Language1: Level.</li>
                      <li> Language2: Level.</li>
                      <li> Language3: Level.</li>
                      <li> Language4: Level.</li>
                      </ol>
                  </div>       
              </div>
              <div className={styles.columnaDerecha}>
              <hr></hr>
                  <h1>·Work Experience:</h1>
                  <h2>Insert job name</h2>
                  <p>-Place (Country) 00/2000 - 00/0000</p>
                  <h2>Insert job name</h2>
                  <p>-Place (Country) 00/2000 - 00/2000</p>
                  <div className={styles.education}>
                  <hr></hr>
                  <h1>·Education:</h1>
                  <h2>Peruskoulu</h2>
                  <p>-IES Mercedes Labrador (Malaga, Espanja) [2013 - 2017] </p>
                  <h2>Lukio</h2>
                  <p>-IES Ben Gabirol (Malaga, Espanja) [2017 - 2018]</p>
                  <h2>Tieto ja viestinta tekniikka</h2>
                  <p>-Vantaan ammattiopisto varia (Vantaa, Suomi) [2020 - 2023]</p>
                  </div>
                  

              </div>
          </div>
      </div>
    </div>
  )
}

export default Cv

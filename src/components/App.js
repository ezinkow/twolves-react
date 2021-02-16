import '../App.css';
import Welcome from './Welcome'
import { playerData } from '../data/playerdata'
import PlayerList from './PlayerList'
import Row from 'react-bootstrap/Row'
import React, { useEffect, useState } from 'react'

const testArray = [
  {
    first: "elan",
    last: "zinkow"
  },
  {
    first: "orly",
    last: "nussbaum"
  }
]
console.log(...testArray)

function App() {
  
  
  const [stats, setStats] = useState([])

  useEffect(() => {
      console.log('useEffect')

      const getStats = async () => {
          try {
              const response = await fetch('https://www.balldontlie.io/api/v1/players/447')
              const data = await response.json()
              console.log('data', data)
              setStats(testArray)
              // const dataArr = []
              // dataArr.splice(0,0,data)
              // console.log('dataarr', dataArr)
              // setStats([...dataArr])
              // console.log("setstats", setStats)
          } catch (err) {
              console.log(err)
          }
      }
      // const stat = person.map(stats => {
      //     return (
      //         <Stats
      //         getStats={getStats}
      //         />
      //     )
      // })
      getStats()
      console.log("statasdfs", stats)
    }, [])

  return (
    <div style={{ margin: " -10px 50px 10px 50px" }}>
      <Welcome />
      <Row>
        <PlayerList
          players={playerData}
        />
      </Row>
      <h3>stats</h3>
      <p>{stats}</p>
    </div>
  );
}

export default App;

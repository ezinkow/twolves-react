import Player from './Player'
import React, { useState, useEffect } from 'react'

function PlayerList({ players }) {
    const [favorites, setFavorites] = useState([])

    function toggleFavorites(id) {
        if (!favorites.includes(id)) {
            setFavorites([...favorites, id])
        } else {
            const updatedFaves = favorites.filter(fav => fav !== id)
            setFavorites(updatedFaves)
        }
    }

    useEffect(() => console.log('favorites', favorites))

    function isFavorite(id) {
        return favorites.includes(id) ? true : false
    }




    const allPlayers = players.map(player => {
        return (
            <Player
                // id={player.id}
                // firstName={player.firstName}
                // lastName={player.lastName}
                // jerseyNumber={player.jerseyNumber}
                // hobbies={player.hobbies}
                // image={player.image}
                // addPlayer={props.addFavorite}
                person={player}
                toggleFavorites={toggleFavorites}
                isFavorite={isFavorite(player.id)}
            />
        )
    })
    return (
        <>
        {allPlayers}
        </>
        )
}

export default PlayerList

// function Favorite(props) {

    
//     console.log("propsfavplayers",props.favPlayers)
//     const favorites = props.favPlayers.map(fav => 
//         <>
//             <h3>Player name: {fav.firstName} {fav.lastName}</h3>
//             <p>Jersey number: #{fav.jerseyNumber}</p>
//             <hr></hr>
//         </>
//         )

//         return(
//             <>
//             <h2>Favorites:</h2>
//             <p>{favorites}</p>
//             </>
//         )

// }

// export default Favorite
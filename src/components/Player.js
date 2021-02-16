import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Player({ person, toggleFavorites, isFavorite }) {
    console.log('person', person)

    const favorite = isFavorite ? <p className="favorite" style={{ color: "white" }}>{person.firstName} is a Fave!</p> : null
    const favButtonText = isFavorite ? "remove from favorites" : "add to favorites"

    const hobbyList = person.hobbies.map(hobby => {
        return <li>{hobby}</li>
    })

    const hobbies = person.hobbies.length < 1 ? "No hobbies listed"
        : hobbyList

        return (
            <Col>
                <CardGroup>
                    <Card bg='secondary' style={{ borderRadius: "20px" }}>
                        <Card.Img variant="top" src={person.image} style={{ width: "100%", height: "200px", display: "block", marginBottom: "10px", borderRadius: "20px" }} />
                        <Card.Title><h3 style={{ color: "white", textAlign: "center" }}>{person.firstName} {person.lastName}</h3></Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <h3>Player Jersey: <span style={{ color: "white" }}>#{person.jerseyNumber}</span></h3>
                                <h3>Hobbies: </h3><p><span style={{ color: "white" }}>{hobbies}</span></p>
                            </Card.Text>
                        </Card.Body>
                        <Button variant="success" onClick={() => toggleFavorites(person.id)}>{favButtonText}</Button>
                        {/* <Button variant="primary" onClick={() => getStats(person.apiKey)}>Get latest stats</Button> */}
                        {favorite}
                    </Card>
                </CardGroup>
            </Col>

        )

    // console.log('stats', stats)
}

export default Player
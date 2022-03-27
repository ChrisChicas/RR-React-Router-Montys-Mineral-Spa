import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"

export default function Packages(props) {
    let displayPackages = props.packages.map(eachPackage => <ListGroup.Item>{eachPackage}</ListGroup.Item>)

    return (
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Our Packages</Card.Title>
                        <Card.Text>
                            Check out some of our packages!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        {displayPackages}
                    </ListGroup>
                </Card>
            </Container>
        </div>
    )
}
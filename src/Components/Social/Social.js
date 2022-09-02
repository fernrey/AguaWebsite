import { Container, Card, CardText, Header, Text, CardContainer } from "./Component";
function Social() {
    return (
        <Container>
            <Header primary>Follow My Socials</Header>
            <CardContainer>
                <Card>
                    <Header>Linkedln</Header>
                    <Text>Stay up to date with new post</Text>
                    <CardText>Follow</CardText>
                </Card>
                <Card >
                    <Header>Instagram</Header>
                    <Text>Stay up to date with new post</Text>
                    <CardText>Follow</CardText>
                </Card>
                <Card>
                    <Header>Flickr</Header>
                    <Text>Stay up to date with new post</Text>
                    <CardText>Follow</CardText>
                </Card>
            </CardContainer>
        </Container>
    );
}

export default Social;
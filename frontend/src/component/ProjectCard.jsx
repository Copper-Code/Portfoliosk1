import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './Card.css'
function ProjectCard({ propsItem }) {
  console.log(propsItem.image);
  return (

      <Card className="card-project">
        <Card.Img className="imageCard"
          variant="top"
          src={propsItem.image ? propsItem.image : "/noimage.png"}
          alt="Image"
        />
        <Card.Body>
          <Card.Title>{propsItem.Name}</Card.Title>
          {/* <Card.Text>{propsItem.Title}</Card.Text> */}
          <Card.Text>{propsItem.TechStack}</Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>{propsItem.TechStack}</ListGroup.Item>
        </ListGroup> */}
        <Card.Body>
          <Card.Link href={propsItem.Github}>Github</Card.Link>
          <Card.Link href={propsItem.Url_Web}>View</Card.Link>
        </Card.Body>
      </Card>

  );
}

export default ProjectCard;

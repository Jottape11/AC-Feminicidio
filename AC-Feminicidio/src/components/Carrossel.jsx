import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarrosselComponente() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1354721782/pt/foto/woman-crying-on-stop-femicide-protest.jpg?b=1&s=612x612&w=0&k=20&c=srKb0FNl-SybV52k9r-XmGXy3q6qz2FJ6pKCShGqlcY="
          alt="First slide"
          width={900}
          height={900}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/568021/pexels-photo-568021.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={900}
          height={900}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1430822776/pt/foto/serious-worried-young-woman-making-hand-stop-gesture-expressing-fighting-for-equal-rights.jpg?b=1&s=612x612&w=0&k=20&c=B5Zm6YG9158nWS6uk8KIB9K3PIXqmbdPyOr1xtA0e2g="
          alt="Third slide"
          width={900}
          height={900}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrosselComponente;
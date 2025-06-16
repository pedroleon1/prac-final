import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card, Accordion, Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Inicio({ inicio, danzasRegiones }) {
  return (
    <Accordion defaultActiveKey="0">
      {danzasRegiones.map((danza, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{danza.titulo}</Accordion.Header>
          <Accordion.Body>{danza.contenido}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

function Cursos({ cursos, modalShow, setModalShow }) {
  return (
    <div className="row">
      {cursos.map((curso, idx) => (
        <div className="col-md-12 mb-3" key={idx}>
          <Card className="d-flex flex-row">
            <Card.Img variant="left" src={curso.imagen} style={{ width: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{curso.nombre}</Card.Title>
              <Card.Text>{curso.descripcion}</Card.Text>
              <Button variant="primary" onClick={() => setModalShow(idx)}>
                Ver Precio
              </Button>
            </Card.Body>
          </Card>

          {/* Modal */}
          <Modal show={modalShow === idx} onHide={() => setModalShow(null)} centered>
            <Modal.Header closeButton>
              <Modal.Title>{curso.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="fs-5">Precio: {curso.precio}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setModalShow(null)}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </div>
  );
}

function Galeria() {
  const imagenes = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Diablada_Oruro.jpg",
      titulo: "Diablada",
      descripcion: "Una danza espectacular con máscaras y trajes coloridos."
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Tobas_Bolivia.jpg",
      titulo: "Tobas",
      descripcion: "Danza con movimientos ágiles y trajes con plumas."
    },
    {
      src: "cueca.jpg",
      titulo: "Cueca",
      descripcion: "Baile tradicional de pareja con pañuelos."
    }
  ];

  return (
    <Carousel>
      {imagenes.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={img.src}
            alt={img.titulo}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>{img.titulo}</h5>
            <p>{img.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default function AdminInterface() {
  const [modalShow, setModalShow] = useState(null);
  const [page, setPage] = useState("inicio");

  const cursos = [
    {
      nombre: "Morenada",
      descripcion: "Baile típico del altiplano boliviano con trajes elaborados y música lenta.",
      imagen: "morenada.jpg",
      precio: "Bs. 150"
    },
    {
      nombre: "Caporales",
      descripcion: "Baile con pasos energéticos y trajes brillantes, originado en La Paz.",
      imagen: "caporales.jpg",
      precio: "Bs. 180"
    },
    {
      nombre: "Tinku",
      descripcion: "Danza ritual del norte de Potosí con movimientos fuertes y simbólicos.",
      imagen: "tinku.jpg",
      precio: "Bs. 170"
    }
  ];

  const danzasRegiones = [
    { titulo: "Altiplano", contenido: "Morenada, Diablada, Llamerada" },
    { titulo: "Valles", contenido: "Cueca, Tobas" },
    { titulo: "Chaco", contenido: "Chovena" },
    { titulo: "Amazonía", contenido: "Taquirari, Macheteros" },
    { titulo: "Oriente", contenido: "Brincao, Carnaval cruceño" }
  ];

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Barra de título */}
        <header className="bg-danger text-white text-center p-3">
          <h1>Academia de Baile "Sergio el bailador" - PEDRO LUIS LEON AGUILAR</h1>
        </header>

        {/* Barra de menú */}
        <nav className="bg-light text-center py-2">
          <Link to="/inicio" className="btn btn-outline-danger mx-2">Inicio</Link>
          <Link to="/cursos" className="btn btn-outline-danger mx-2">Oferta de cursos</Link>
          {/*<Link to="/galeria" className="btn btn-outline-danger mx-2">Galería</Link>*/}
        </nav>

        {/* Contenido */}
        <main className="container flex-grow-1 py-4">
          <Routes>
            <Route path="/inicio" element={<Inicio danzasRegiones={danzasRegiones} />} />
            <Route path="/cursos" element={<Cursos cursos={cursos} modalShow={modalShow} setModalShow={setModalShow} />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-light text-center py-3">
          © 2025 Academia de Baile "Sergio el bailador". Todos los derechos reservados.
        </footer>
      </div>
    </Router>
  );
}

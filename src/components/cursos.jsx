import React, { useState } from "react";

const cursos = [
  {
    nombre: "Morenada",
    descripcion: "Baile típico del altiplano boliviano con trajes elaborados y música lenta.",
    imagen: "/morenada.jpg",
    precio: "Bs. 150"
  },
  {
    nombre: "Caporales",
    descripcion: "Baile con pasos energéticos y trajes brillantes, originado en La Paz.",
    imagen: "/caporales.jpg",
    precio: "Bs. 180"
  },
  {
    nombre: "Tinku",
    descripcion: "Danza ritual del norte de Potosí con movimientos fuertes y simbólicos.",
    imagen: "/tinku.jpg",
    precio: "Bs. 170"
  }
];

function Cursos() {
  const [modal, setModal] = useState({ open: false, precio: "" });

  return (
    <div>
      <h2 style={{color:'#6c63ff', marginBottom:'1em'}}>Oferta de cursos</h2>
      {cursos.map((curso, idx) => (
        <div className="card" key={idx}>
          <img src={curso.imagen} alt={curso.nombre} />
          <div className="card-body">
            <div className="card-title">{curso.nombre}</div>
            <div className="card-desc">{curso.descripcion}</div>
            <button onClick={() => setModal({ open: true, precio: curso.precio })}>
              Ver precio
            </button>
          </div>
        </div>
      ))}
      {modal.open && (
        <div className="modal-backdrop" onClick={() => setModal({ open: false, precio: "" })}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Precio del curso</h3>
            <p>{modal.precio}</p>
            <button onClick={() => setModal({ open: false, precio: "" })}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cursos;
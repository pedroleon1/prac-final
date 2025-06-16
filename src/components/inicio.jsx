import React from "react";

const danzasRegiones = [
  { titulo: "Altiplano", contenido: "Morenada, Diablada, Llamerada" },
  { titulo: "Valles", contenido: "Cueca, Tobas" },
  { titulo: "Chaco", contenido: "Chovena" },
  { titulo: "Amazonía", contenido: "Taquirari, Macheteros" },
  { titulo: "Oriente", contenido: "Brincao, Carnaval cruceño" }
];

function Inicio() {
  const [open, setOpen] = React.useState(null);

  return (
    <div>
      <h2 style={{color:'#6c63ff', marginBottom:'1em'}}>Regiones y danzas de Bolivia</h2>
      <div className="accordion">
        {danzasRegiones.map((danza, idx) => (
          <div className="accordion-item" key={idx}>
            <div
              className="accordion-title"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {danza.titulo}
            </div>
            {open === idx && (
              <div className="accordion-content">{danza.contenido}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
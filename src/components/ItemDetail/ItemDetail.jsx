

export const ItemDetail = ({vehiculo }) => {
  return (
    <div className="row" >
      <div className="col">
        <img className="" src={imagen} />
      </div>
      <div className="col">
        <h1>{vehiculo.producto}</h1>
        <h2>{vehiculo.categoria}</h2>
        <p>{vehiculo.precio}</p>
     
      </div>    
    </div>
  )
}



const vehiculos = [
    {id:"1", categoria:"pick-up", producto:"Ranger", stock:10, precio:"10000", imagen:"https://www.ar.ford.com/manual/img/ranger.jpg", descripcion:"Nueva Ranger LIMITED 3.2L 4X4 Diesel ",imagenCart:"https://forcam.com.ar/autos_tumb/ranger.webp"},
    {id:"2", categoria:"pick-up", producto:"Maverick", stock:3, precio:"8000", imagen:"https://www.ar.ford.com/manual/img/maverick.jpg", descripcion:"Nueva  Maverick  Lariat 2.0 L 4X4 AT", imagenCart:"https://forcam.com.ar/autos_tumb/maverick.webp"},
    {id:"3", categoria:"pick-up", producto:"F-150 Raptor", stock:2, precio:"90.000", imagen:"https://www.ar.ford.com/manual/img/f-150-raptor.jpg", descripcion:"Nueva F-150 Raptor 3.5L 4x4 AT",imagenCart:"https://forcam.com.ar/autos_tumb/f-150-raptor.webp"},
    {id:"4", categoria:"suv", producto:"Bronco",precio:"15.000", stock:8, imagen:"https://www.ar.ford.com/manual/img/broncosport.jpg", descripcion:"Nueva Bronco WildTrack 2.0L 4X4 AT", imagenCart:"https://forcam.com.ar/autos_tumb/bronco.webp"},
    {id:"5", categoria:"suv", producto:"Territory",precio:"12.000", stock:15, imagen:"https://www.ar.ford.com/manual/img/territory.jpg", descripcion:"Nueva Territory 1.5L Turbo AT",imagenCart:"https://forcam.com.ar/autos_tumb/territory.webp"},
    {id:"6", categoria:"electrico", producto:"Kuga",precio:"18.000", stock:3, imagen:"https://www.ar.ford.com/manual/img/nueva-kuga.jpg", descripcion:"Kuga Híbrida 2.5L Auto-recargable ",imagenCart:"https://forcam.com.ar/autos_tumb/kuga-hibrido.webp"},
    {id:"7", categoria:"electrico", producto:"F-150",precio:"85.000", stock:2, imagen:"https://www.ar.ford.com/manual/img/f-150.jpg", descripcion:"Nueva F-150  3.5L V6 Híbrido 4x4 AT ",imagenCart:"https://forcam.com.ar/autos_tumb/f-150.webp"},
    {id:"8", categoria:"electrico", producto:"Mondeo",precio:"70.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/mondeohibrido.jpg ", descripcion:"Nuevo Mondeo Hìbrido ",imagenCart:"https://forcam.com.ar/autos_tumb/mondeo-vignale.webp"},
    {id:"9", categoria:"pick-up", producto:"Ranger Raptor",precio:"40.000", stock:7, imagen:"https://www.ar.ford.com/manual/img/rangerraptor.jpg", descripcion:"Nueva Ranger Raptor 2.0L Bi Turbo ",imagenCart:"https://forcam.com.ar/autos_tumb/raptor.webp"},
    {id:"10", categoria:"suv", producto:"Ecosport",precio:"6.000", stock:10, imagen:"https://www.ar.ford.com/manual/img/ecosport.jpg", descripcion:"Ecosport 1.5L Dragon 4X2 ",imagenCart:"https://smilenet.euwest01.umbraco.io/media/14612/ecosport-titanium.jpg"},
    {id:"11", categoria:"autos", producto:"Mustang",precio:"80.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/mustang.jpg", descripcion:"Nuevo Mustang Match V8 5.0L  AT ",imagenCart:"https://forcam.com.ar/autos_tumb/mustangmatch1.webp"},
    {id:"12", categoria:"autos", producto:"Mondeo",precio:"45.000", stock:5, imagen:"https://www.ar.ford.com/manual/img/mondeo.jpg", descripcion:"Mondeo 2.0L Ecoboost  AT ",imagenCart:"https://forcam.com.ar/autos_tumb/mondeo-vignale.webp"}
  
  ]
export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const filtro = id ? vehiculos.find(vehiculo => vehiculo.id === id ) : vehiculos                                 
                resolve( filtro )                           
            },0 )
        })            
  

  
}



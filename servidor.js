const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let estudiantes = [
    {id:1, nombre: 'Francisco Alvarez'},
    {id:2, nombre: 'Monica Gutierrez'},
    {id:3, nombre: 'Carlos Ruiz'},
    N
    
];


// Obtener todos los estudiantes 

app.get('/estudiantes', (req, res)=>{   // => Arrow function
    res.json(estudiantes);
})

//  GET: Obtener un estudiante por ID

app.get('/estudiantes/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const estudiante = estudiantes.find(e=>e.id===id);


if (estudiante){
    res.json(estudiante);
} else {
    res.status(404).send('Estudiante no localizado')
}
});


// Inicializacion del servidor
app.listen(PORT,()=>{
    console.log('Servidor ejecutando en http://localhost:${PORT}');
});

// POST: para crear un nuevo estudiante

app.post('/estudiantes', (req,res) =>{
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        nombre: req.body.nombre
    };
    estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
}); 

// PUT >> Actualizar un item existente: ID

app.put('/items/:id',(req, res) => {  // definmos una ruta PUT para definir a un estudiante
    const id = parseInt (req.params.id); // Convertimos el parametro id a un entero
    const item = items.find(i=>i.id===id); //buscamos al estudiante con el id

    if (item){  //Si el estudiante existe actualizamos el estudiante
        item.name=req.body.name; //devolvemos el estudiante actualizado
        res.json(item); // 
    }else{
        res.status(404).send('item no encontrado');
    }

});


app.put('/estudiantes/:id', (req, res)=>{

    const id= parseInt(req.params);
    const estudiante = estudiantes.find (e=>e.id===id);
    
    if(estudiante){
        estudiante.nombre=req.body.name;
        res.json(estudiante);
    } else{
        res.status(404).send ('Estudiante no encontrado');
    }
});

app.delete('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
        estudiantes.splice(index, 1);
        res.send('Estudiante eliminado');
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
});
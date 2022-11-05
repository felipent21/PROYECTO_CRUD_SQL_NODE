var Db  = require('./dboperations');
var Asignatura = require('./Asignatura');
//nuevo
var Docente = require('./Docente');
//nuevo
var Estudiante = require('./Estudiante');
//nuevo
var Record = require('./Record');
//nuevo
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

//rutas de asignatura
router.route('/Asignaturas').get((request,response)=>{

    dboperations.getAsigs().then(result => {
       response.json(result[0]);
    })

})

router.route('/Asignatura/:id').get((request,response)=>{
    dboperations.getAsig(request.params.id).then(result => {
       response.json(result[0]);
    })

})

router.route('/Asignatura').post((request,response)=>{
    let asignatura = {...request.body}
    dboperations.postAsig(asignatura).then(result => {
       response.status(201).json(result);
	   console.log(result)   
    })
})


router.route('/edita/:id').put((request, response)=>{
   let asignatura = {...request.body}
   dboperations.putAsig(asignatura,request.params.id).then(result =>{
      response.json(result)     
       console.log(result)
       console.log('Editado!!!')
   })
})

//ACA ESTAMOS TRABAJANDO
router.route('/deletea/:id').delete((request, response)=>{
   let asignatura = {...request.body}
   dboperations.deleteAsigXId(asignatura,request.params.id).then(result =>{
       response.json(result)     
       console.log(result)
       console.log('Eliminado!!!')
    })
})
//ACA ESTAMOS TRABAJANDO
//termina rutas de asignatura
//rutas de docente

router.route('/Docentes').get((request,response)=>{
   dboperations.getDocs().then(result => {
      response.json(result[0]);
   })

})

router.route('/Docente/:id').get((request,response)=>{
   dboperations.getDoc(request.params.id).then(result => {
      response.json(result[0]);
   })

})

router.route('/Docente').post((request,response)=>{
   let docente = {...request.body}
   dboperations.postDoc(docente).then(result => {
      response.status(201).json(result);
     console.log(result)   
   })
})

router.route('/editd/:id').put((request, response)=>{
   let docente = {...request.body}
   dboperations.putDoc(docente,request.params.id).then(result =>{
      response.json(result)     
       console.log(result)
       console.log('Editado!!!')
   })
})

router.route('/deleted/:id').delete((request, response)=>{
   let docente = {...request.body}
   dboperations.deleteAsigXId(docente,request.params.id).then(result =>{
       response.json(result)     
       console.log(result)
       console.log('Eliminado!!!')
    })
})
//termian rutas de docente

// rutas de estudiante

router.route('/Estudiantes').get((request,response)=>{

   dboperations.getEsts().then(result => {
      response.json(result[0]);
   })

})

router.route('/Estudiante/:id').get((request,response)=>{
   dboperations.getEst(request.params.id).then(result => {
      response.json(result[0]);
   })

})

router.route('/Estudiante').post((request,response)=>{
   let estudiante = {...request.body}
   dboperations.postEst(estudiante).then(result => {
      response.status(201).json(result);
     console.log(result)   
   })
})

router.route('/edite/:id').put((request, response)=>{
   let estudiante = {...request.body}
   dboperations.putEst(estudiante,request.params.id).then(result =>{
      response.json(result)     
       console.log(result)
       console.log('Editado!!!')
   })
})

router.route('/deletee/:id').delete((request, response)=>{
   let estudiante = {...request.body}
   dboperations.deleteEstXId(estudiante,request.params.id).then(result =>{
       response.json(result)     
       console.log(result)
       console.log('Eliminado!!!')
    })
})

//aca empiezan rutas de Record
router.route('/Records').get((request,response)=>{

   dboperations.getRecs().then(result => {
      response.json(result[0]);
   })

})

router.route('/Record/:id').get((request,response)=>{
   dboperations.getRec(request.params.id).then(result => {
      response.json(result[0]);
   })

})

router.route('/Record').post((request,response)=>{
   let record = {...request.body}
   dboperations.postRec(record).then(result => {
      response.status(201).json(result);
     console.log(result)   
   })
})

router.route('/editr/:id').put((request, response)=>{
   let record = {...request.body}
   dboperations.putRec(record,request.params.id).then(result =>{
      response.json(result)     
       console.log(result)
       console.log('Editado!!!')
   })
})

router.route('/deleter/:id').delete((request, response)=>{
   let record = {...request.body}
   dboperations.deleteRecXId(record,request.params.id).then(result =>{
       response.json(result)     
       console.log(result)
       console.log('Eliminado!!!')
    })
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);


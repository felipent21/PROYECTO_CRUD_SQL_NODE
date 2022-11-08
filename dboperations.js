var config = require('./dbconec');
const sql = require('mssql');

//operaciones asignatura
async function getAsigs() {
    try {
        let pool = await sql.connect(config);
        let colegio = await pool.request()
        .execute('SP_MOSTRARASIG');
        
        return colegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getAsig(asignaturaId) {
    try {
        let pool = await sql.connect(config);
        let colegio = await pool.request()
            .input('Id', sql.Int, asignaturaId)            
            .execute('SP_MOSTRARASIGXID');
        return colegio.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function postAsig(Asignatura) {

    try {
        let pool = await sql.connect(config);
        let insertColegio = await pool.request()
            .input('Codigo', sql.NVarChar, Asignatura.Codigo)
            .input('Nombre', sql.NVarChar, Asignatura.Nombre)
            .input('Creditos', sql.TinyInt, Asignatura.Creditos)
            .execute('SP_INSERTARASIG');
        return insertColegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }

}



async function putAsig(Asignatura,Id) {
    try {
        let pool = await sql.connect(config);
        
        let updateColegio = await pool.request()
        .input('Id', sql.Int,Asignatura.Id)
        .input('Codigo', sql.NVarChar, Asignatura.Codigo)
        .input('Nombre', sql.NVarChar, Asignatura.Nombre)
        .input('Creditos', sql.TinyInt, Asignatura.Creditos)       
        .execute('SP_ACTUALIZARASIG');
         return updateColegio.recordset;
    }
    catch (error) {
        console.log(error);
    }
}


async function deleteAsigXId(id) {
    try {
        let pool = await sql.connect(config);        
        let deleteColegio = await pool.request()
        .input('id', sql.Int,id)               
        .execute('SP_ELIMINARASIG')        
         return deleteColegio.recordset;
    }
    catch (error) {
        console.log(error);
    }
}


//hasta aqui operaciones asignatura
//operaciones docente
async function getDocs() {
    try {
        let pool = await sql.connect(config);
        let colegio = await pool.request()
        .execute('SP_MOSTRARDOC');
        
        return colegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getDoc(docenteId) {
    try {
        let pool = await sql.connect(config);
        let colegio = await pool.request()
            .input('Id', sql.Int, docenteId)            
            .execute('SP_MOSTRARDOCENTESXID');
        return colegio.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function postDoc(Docente) {

    try {
        let pool = await sql.connect(config);
        let insertColegio = await pool.request()
            .input('Codigo', sql.NVarChar, Docente.Codigo)
            .input('Nombre', sql.NVarChar, Docente.Nombre)
            .input('Apellido', sql.NVarChar, Docente.Apellido)
            .input('Codigoasig', sql.NVarChar, Docente.Cod_Asig)
            .execute('SP_INSERTARDOC');
        return insertColegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }

}

async function putDoc(Docente,Id) {
    try {
        let pool = await sql.connect(config);        
        let updateColegio = await pool.request()
        .input('Id', sql.Int,Docente.Id)
        .input('Codigo', sql.NVarChar, Docente.Codigo)
        .input('Nombre', sql.NVarChar, Docente.Nombre)
        .input('Apellido', sql.NVarChar, Docente.Apellido)
        .input('Codigoasig', sql.NVarChar, Docente.Cod_Asig) 
        .execute('SP_ACTUALIZARDOC');      
         return updateColegio.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteDocXId(id) {
    try {
        let pool = await sql.connect(config);        
        let deleteColegio = await pool.request()
        .input('id', sql.Int,id)               
        .execute('SP_ELIMINARDOC')        
         return deleteColegio.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//operaciones del estudiante

async function getEsts() {
    try {
        let pool = await sql.connect(config);
        let colegio = await pool.request()
        .execute('SP_MOSTRAREST');
        
        return colegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getEst(estudianteId) {
    try {
        let pool = await sql.connect(config);
        let colegio = await pool.request()
            .input('Id', sql.Int, estudianteId)            
            .execute('SP_MOSTRARESTXID');
        return colegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function postEst(Estudiante) {

    try {
        let pool = await sql.connect(config);
        let insertColegio = await pool.request()
            .input('Codigo', sql.NVarChar, Estudiante.Codigo)
            .input('Nombre', sql.NVarChar, Estudiante.Nombre)
            .input('Apellido', sql.NVarChar, Estudiante.Apellido)
            .input('Semestre', sql.NVarChar, Estudiante.Semestre)
            .input('Carrera', sql.NVarChar, Estudiante.Carrera)
            .input('Codigoasig', sql.NVarChar, Estudiante.Cod_Asig)
            .execute('SP_INSERTAREST');
        return insertColegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }

}

async function putEst(Estudiante,Id) {
    try {
        let pool = await sql.connect(config);        
        let updateColegio = await pool.request()
        .input('Id', sql.Int,Estudiante.Id)
        .input('Codigo', sql.NVarChar, Estudiante.Codigo)
        .input('Nombre', sql.NVarChar, Estudiante.Nombre)
        .input('Apellido', sql.NVarChar, Estudiante.Apellido)
        .input('Semestre', sql.NVarChar, Estudiante.Semestre)
        .input('Carrera', sql.NVarChar, Estudiante.Carrera)
        .input('Codigoasig', sql.NVarChar, Estudiante.Cod_Asig)
        .execute('SP_ACTUALIZAREST');      
         return updateColegio.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteEstXId(id) {
    try {
        let pool = await sql.connect(config);        
        let deleteColegio = await pool.request()
        .input('id', sql.Int,id)               
        .execute('SP_ELIMINAREST')        
         return deleteColegio.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

//terminan operacones estudiante

//empiezan operaciones record

async function getRecs() {
    try {
        let pool = await sql.connect(config);
        let colegio = await pool.request()
        .execute('SP_MOSTRARREC');
        
        return colegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getRec(recordId) {
    try {
        let pool = await sql.connect(config);
        let colegio = await pool.request()
            .input('Id', sql.Int, recordId)            
            .execute('SP_MOSTRARRECXID');
        return colegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function postRec(Record) {

    try {
        let pool = await sql.connect(config);
        let insertColegio = await pool.request()
        .input('Codigo', sql.NVarChar, Record.Codigo)
        .input('Periodo', sql.NVarChar, Record.Periodo)
        .input('Codest', sql.NVarChar, Record.Cod_Est)
        .input('Coddoc', sql.NVarChar, Record.Cod_Doc)
        .input('Nota1', sql.Decimal, Record.Nota1)
        .input('Nota2', sql.Decimal, Record.Nota2)
        .execute('SP_INSERTARREC');
        return insertColegio.recordsets;
    }
    catch (error) {
        console.log(error);
    }

}

async function putRec(Record,Id) {
    try {
        let pool = await sql.connect(config);        
        let updateColegio = await pool.request()
        .input('Id', sql.Int,Record.Id)
        .input('Codigo', sql.NVarChar, Record.Codigo)
        .input('Periodo', sql.NVarChar, Record.Periodo)
        .input('Codest', sql.NVarChar, Record.Cod_Est)
        .input('Coddoc', sql.NVarChar, Record.Cod_Doc)
        .input('Nota1', sql.Decimal, Record.Nota1)
        .input('Nota2', sql.Decimal, Record.Nota2)
        
        .execute('SP_ACTUALIZARREC');      
         return updateColegio.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteRecXId(id) {
    try {
        let pool = await sql.connect(config);        
        let deleteColegio = await pool.request()
        .input('id', sql.Int,id)               
        .execute('SP_ELIMINARREC')        
         return deleteColegio.recordset;
    }
    catch (error) {
        console.log(error);
    }
}
//exportamos los modulos

module.exports = {
    getAsigs: getAsigs,
    getAsig : getAsig,
    postAsig : postAsig,
    putAsig:putAsig,
    deleteAsigXId:deleteAsigXId,
    getDocs:getDocs,
    getDoc:getDoc,
    postDoc:postDoc,
    putDoc:putDoc,
    deleteDocXId:deleteDocXId,
    getEsts:getEsts,
    getEst:getEst,
    postEst:postEst,
    putEst:putEst,
    deleteEstXId:deleteEstXId,
    getRecs:getRecs,
    getRec:getRec,
    postRec:postRec,
    putRec:putRec,
    deleteRecXId:deleteRecXId,


}

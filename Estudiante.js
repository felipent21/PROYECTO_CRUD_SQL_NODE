class Estudiante{
    constructor(Id,Codigo,Nombre,Apellido,Semestre,Carrera,Cod_Asig){
        this.Id = Id; 
        this.Codigo = Codigo;
        this.Nombre = Nombre; 
        this.Apellido = Apellido;
        this.Semestre = Semestre;
        this.Carrera = Carrera;
        this.Cod_Asig = Cod_Asig;            
    }
}

module.exports = Estudiante;
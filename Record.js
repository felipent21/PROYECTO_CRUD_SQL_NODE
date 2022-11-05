class Record{
    constructor(Id,Codigo,Periodo,Cod_Est,Cod_Doc,Nota1,Nota2,Promedio){
        this.Id = Id; 
        this.Codigo = Codigo;
        this.Periodo = Periodo; 
        this.Cod_Est = Cod_Est;
        this.Cod_Doc = Cod_Doc;
        this.Nota1 = Nota1; 
        this.Nota2 = Nota2; 
        this.Promedio = Promedio;             
    }
}

module.exports = Record;
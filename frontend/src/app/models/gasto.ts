export class Gasto {
    _id: string;
    tipo: string;
    ruc: string;
    empresa: string;
    monto: number;
    constructor(_id='', tipo='',ruc='',empresa='',monto=0){
        this._id = _id;
        this.tipo = tipo;
        this.ruc = ruc;
        this.empresa = empresa;
        this.monto = monto;
    }
}

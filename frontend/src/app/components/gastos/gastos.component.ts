import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';
import { Gasto } from 'src/app/models/gasto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent{
  gastoService;
  constructor(gastoService:GastoService) {
    this.gastoService = gastoService;
  }
  resetForm(form?:NgForm){
  if(form){
    form.reset();
    this.gastoService.selectedGasto=new Gasto();
    }
  }
  addGasto(form:NgForm){
    this.gastoService.postGasto(form.value)
    .subscribe(res=>{
    console.log(res);
    this.resetForm(form);
    location.reload();
    })
  }
  getGastos(){
      this.gastoService.getGastos()
      .subscribe(res=>{
      this.gastoService.gastos=res as Gasto[];
      console.log(res);
      })
  }
  ngOnInit():void{
    this.getGastos();
  }
}



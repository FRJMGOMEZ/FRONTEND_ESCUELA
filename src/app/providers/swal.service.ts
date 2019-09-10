import { Injectable } from '@angular/core';
import Swal from "sweetalert2";
@Injectable({

  providedIn: 'root'
})
export class SwalService {
  constructor() { }

  confirmDelete(text:string=''){
    return new Promise((resolve,reject)=>{
      Swal.fire({
        title: '¿Estás seguro/a?',
        text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText:'Cancelar'
      }).then((result) => {
        if (result.value) {
          resolve(true)
        }else{
          resolve(false)
        }
      })
    })
  }

  notSupported(){
    Swal.fire({
      text: 'Formato de archivo no soportado',
      type: 'info',
      showCloseButton: true
    })
  }

  itsCreated(item:string,reference:string){
    Swal.fire({
      type:"success",
      text:`${item} ${reference} creado`
    })
  }
}


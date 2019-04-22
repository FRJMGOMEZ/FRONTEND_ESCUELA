import { Injectable } from '@angular/core';
import Swal from "sweetalert2";
@Injectable({

  providedIn: 'root'
})
export class SwalService {
  constructor() { }

  confirmDelete(){
    return new Promise((resolve,reject)=>{
      Swal.fire({
        title: '¿Estás seguro/a?',
        text: "Este cambio no se podrá revertir",
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
}


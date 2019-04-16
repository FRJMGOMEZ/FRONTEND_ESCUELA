import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error) {
    let errorMessage = '';
    if (error.error.message) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${
        error.error.err.message
      }`;
    }
    Swal.fire({
        title: errorMessage,
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
    })
    return throwError(errorMessage);
  }
}

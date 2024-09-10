import { Component } from '@angular/core';
import { ConsultationsService } from '../consultations.service';
import { FormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-cancel-consultation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cancel-consultation.component.html',
  styleUrl: './cancel-consultation.component.css'
})
export class CancelConsultationComponent {

  codigo:string = ''

  constructor(private consultationsService: ConsultationsService) { }

  cancelarCita(){
    if(this.codigo === ''){
      alert('El codigo es requerido')
      return;
    }
    this.consultationsService.cancelConsultation(this.codigo)
    .pipe(catchError(error => {
      alert(error.error.message)
      return of()
  }))
    .subscribe(data=> alert(`Se ha cancelado la cita con codigo ${data.consultationCode}`))
  }

}

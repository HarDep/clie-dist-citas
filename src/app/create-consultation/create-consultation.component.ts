import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ConsultationsService } from '../consultations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { formatDate, NgIf } from '@angular/common';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-create-consultation',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './create-consultation.component.html',
  styleUrls: ['./create-consultation.component.css']
})
export class CreateConsultationComponent {
  consultation: any = {
    cc: '',
    appointmentDate: new Date(),
    authorizationFile: null
  };
  selectedFile: File | null = null;
  message: string = '';

  formatingDate: Function = (date:Date) => formatDate(date, "dd-MM-YYYY hh:mm a", this.locale);

  constructor(
    private consultationsService: ConsultationsService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  // Método para manejar la selección del archivo
  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      console.log(input.files[0])
      this.selectedFile = input.files[0]; // Guardamos el archivo seleccionado
    }
  }

  onSubmit() {
    // Verificamos si hay campos vacíos
    if (!this.consultation.cc || !this.consultation.appointmentDate || !this.selectedFile) {
      alert('Por favor complete todos los campos');
      return;
    }

    const formData = new FormData();

    // Añadimos el archivo seleccionado al formData
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    console.log(this.consultation, this.selectedFile)

    // Llamada al servicio con todos los argumentos requeridos
    this.consultationsService.createConsultation(
      this.consultation.cc,                       // Primer argumento: cc
      this.formatingDate(this.consultation.appointmentDate),           // Segundo argumento: consultationDate
      formData                                    // Tercer argumento: formData
    ).pipe(catchError(error => {
      alert(error.error.message)
      return of()
  })).subscribe(
      data => alert(`se ha guardado exitosamente: codigo de cita es ${data.consultationCode}`)
    );
  }
}
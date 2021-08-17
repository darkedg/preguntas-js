import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../models/pregunta';
import { Respuesta } from '../../models/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPreguntas: Pregunta[];

  constructor(public _preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listPreguntas = this._preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listPreguntas[this._preguntaService.indexPregunta].descripcionPregunta;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRta: number) {
    if(this._preguntaService.pregConfirmada === true) {
      return;
    }
    this._preguntaService.opcionSeleccionada = respuesta;
    this._preguntaService.deshabilitarBtn = false;
    this._preguntaService.indexRespuesta = indexRta;
  }

  AddClassOption(respuesta: Respuesta) {
    // Pregunta seleccionada y No esta seleccionada
    if(respuesta === this._preguntaService.opcionSeleccionada && !this._preguntaService.pregConfirmada) {
      return 'active text-light';
    }

    // Respuesta CORRECTA y esta confirmada
    if(respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return 'list-group-item-success';
    }

    // Respuesta es INCORRECTA y esta confirmada
    if(respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return 'list-group-item-danger';
    }
  }

  iconCorrecta(respuesta: Respuesta) {
    if(respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return true;
    } else {
      return false;
    }
  }

  iconIncorrecta(respuesta: Respuesta) {
    if(respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return true;
    } else {
      return false;
    }
  }
}

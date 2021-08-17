import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../../models/pregunta';
import { PreguntaService } from '../../services/pregunta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  listPreguntas: Pregunta[];
  respuestasUsuario: any[];

  constructor(private _preguntaService: PreguntaService, private router: Router) { }

  ngOnInit(): void {
    this.listPreguntas = this._preguntaService.preguntas;
    this.respuestasUsuario = this._preguntaService.respuestasUsuario;
  }

  volver() {
    this._preguntaService.respuestasUsuario = [];
    this.router.navigate(['/']);
  }
}

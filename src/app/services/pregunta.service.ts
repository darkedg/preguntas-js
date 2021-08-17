import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada: Respuesta;
  deshabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta = null;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('JavaScript fue diseñado por ____________ en 1995.', [
      new Respuesta('Nobel', 0),
      new Respuesta('Netscape', 1),
      new Respuesta('Microsoft', 0),
      new Respuesta('Apple', 0)
    ]),
    new Pregunta('La llamada al código Javascript debe colocarse en:', [
      new Respuesta('Antes de la etiqueta HTML', 0),
      new Respuesta('La sección Body de la página', 0),
      new Respuesta('La sección Head o en Body', 1),
      new Respuesta('Ninguno de las anteriores', 0)
    ]),
    new Pregunta('La expresión "21" + 9 da como resultado:', [
      new Respuesta('30', 0),
      new Respuesta('9', 0),
      new Respuesta('Error', 0),
      new Respuesta('219', 1)
    ]),
    new Pregunta('¿Qué valor devuelve la siguiente expresión: typeof true?', [
      new Respuesta('boolean', 1),
      new Respuesta('string', 0),
      new Respuesta('object', 0),
      new Respuesta('undefined', 0)
    ]),
    new Pregunta('Tipo de dato JavaScript para manejar números:', [
      new Respuesta('int', 0),
      new Respuesta('number', 1),
      new Respuesta('long', 0),
      new Respuesta('integer', 0)
    ]),
    new Pregunta('¿Qué norma rige el Lenguaje de Programación JavaScript?', [
      new Respuesta('IEC', 0),
      new Respuesta('Ansi', 0),
      new Respuesta('ISO 9660', 0),
      new Respuesta('ECMAScript', 1)
    ]),
    new Pregunta('¿Qué valor devuelve la siguiente expresión: typeof null?', [
      new Respuesta('boolean', 0),
      new Respuesta('string', 0),
      new Respuesta('object', 1),
      new Respuesta('undefined', 0)
    ]),
    new Pregunta('La expresión +"21" + 9 da como resultado:', [
      new Respuesta('30', 1),
      new Respuesta('9', 0),
      new Respuesta('Error', 0),
      new Respuesta('219', 0)
    ]),
  ];

  constructor() { }

  getPreguntas() {
    return this.preguntas.slice();
  }
}

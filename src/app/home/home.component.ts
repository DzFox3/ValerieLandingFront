import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [ // Cuando el elemento entra en el DOM
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent{
  
  preguntas = [
    {
      pregunta: '¿QUIÉNES PUEDEN ACCEDER A LOS SEGUROS DE VBESERENI?',
      respuesta: 'Para toda persona que viva en Estados Unidos, sin importar el estatus migratorio, que busque cobertura médica, protección financiera o planes de seguro de vida.',
      abierta: false // La primera abierta por defecto
    },
    {
      pregunta: '¿QUÉ TIPO DE SEGUROS OFRECEMOS?',
      respuesta: 'Ofrecemos seguros médicos, de vida, financieros, etc.',
      abierta: false
    },
    {
      pregunta: '¿LOS SEGUROS TIENEN COBERTURA EN TODO ESTADOS UNIDOS?',
      respuesta: 'Sí, la cobertura aplica en todo el territorio nacional.',
      abierta: false
    },
    {
      pregunta: '¿CUÁNTO CUESTA LA INSCRIPCIÓN A UN SEGURO?',
      respuesta: 'La inscripción puede variar, pero tenemos opciones sin costo inicial.',
      abierta: false
    },
    {
      pregunta: '¿CÓMO PUEDO AHORRAR EN SERVICIOS MÉDICOS SIN CONTRATAR UN SEGURO?',
      respuesta: 'Ofrecemos membresías con descuentos médicos exclusivos.',
      abierta: false
    }
  ];

  togglePregunta(index: number) {
    this.preguntas[index].abierta = !this.preguntas[index].abierta;
  }
}

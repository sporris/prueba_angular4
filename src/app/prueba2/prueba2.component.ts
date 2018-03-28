import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {
  hobbies: string[];
  mostrarcomponentes2: boolean;
  hobby: string;

  constructor() {
    this.hobbies = ['correr', 'leer', 'salir'];
    this.mostrarcomponentes2 = false;

  }

  func_mostrarcomponentes2() {
    this.mostrarcomponentes2 = !this.mostrarcomponentes2;
  }

  newHobby(hobby) {
    if (hobby.value != '') {
      this.hobbies.push(hobby.value);
      hobby.value = '';
      return false;
    }
    else {
      window.alert('No has introducido texto')
    }
  }

  borrar_hobbiies(i) {
    this.hobbies.splice(i, 1);
    return false;
  }

  ngOnInit() {
  }

}

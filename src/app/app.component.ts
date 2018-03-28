import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;
  name: string;
  hobbies: string[];
  mostrarcomponentes2: boolean;
  hobby: string;

  constructor() {
    this.title = "Miapp";
    this.name = "Soy santi";
    this.hobbies = ['correr', 'leer', 'salir'];
    this.mostrarcomponentes2 = false;

  }

  func_mostrarcomponentes2() {
    this.mostrarcomponentes2 = !this.mostrarcomponentes2;
  }

  newHobby(hobby) {
    if (hobby.value != '' ) {
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
    }
    else {
      window.alert ( 'No has introducido texto')
    }
  }

  borrar_hobbiies(i) {
    this.hobbies.splice(i,1);
    return false;

  }

}

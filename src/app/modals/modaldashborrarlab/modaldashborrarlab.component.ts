import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modaldashborrarlab',
  templateUrl: './modaldashborrarlab.component.html',
  styleUrls: ['./modaldashborrarlab.component.scss']
})
export class ModaldashborrarlabComponent implements OnInit {
  form!: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}

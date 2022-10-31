import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modaldashmaslab',
  templateUrl: './modaldashmaslab.component.html',
  styleUrls: ['./modaldashmaslab.component.scss']
})
export class ModaldashmaslabComponent implements OnInit {
  form!: FormGroup;

   //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}

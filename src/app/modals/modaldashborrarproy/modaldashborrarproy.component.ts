import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modaldashborrarproy',
  templateUrl: './modaldashborrarproy.component.html',
  styleUrls: ['./modaldashborrarproy.component.scss']
})
export class ModaldashborrarproyComponent implements OnInit {
  form!: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}

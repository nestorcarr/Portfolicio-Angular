import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-modaldashmaseduc',
  templateUrl: './modaldashmaseduc.component.html',
  styleUrls: ['./modaldashmaseduc.component.scss']
})
export class ModaldashmaseducComponent implements OnInit {
  form!: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}

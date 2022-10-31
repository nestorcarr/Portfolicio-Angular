import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modaldashedicioneduc',
  templateUrl: './modaldashedicioneduc.component.html',
  styleUrls: ['./modaldashedicioneduc.component.scss']
})
export class ModaldashedicioneducComponent implements OnInit {
  form!: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}

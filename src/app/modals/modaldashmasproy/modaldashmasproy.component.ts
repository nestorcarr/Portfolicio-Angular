import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modaldashmasproy',
  templateUrl: './modaldashmasproy.component.html',
  styleUrls: ['./modaldashmasproy.component.scss']
})
export class ModaldashmasproyComponent implements OnInit {
  form!: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}

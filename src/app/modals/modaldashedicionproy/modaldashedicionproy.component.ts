import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modaldashedicionproy',
  templateUrl: './modaldashedicionproy.component.html',
  styleUrls: ['./modaldashedicionproy.component.scss']
})
export class ModaldashedicionproyComponent implements OnInit {
  form!: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}

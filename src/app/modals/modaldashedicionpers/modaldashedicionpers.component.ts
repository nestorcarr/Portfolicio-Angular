import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modaldashedicionpers',
  templateUrl: './modaldashedicionpers.component.html',
  styleUrls: ['./modaldashedicionpers.component.scss']
})
export class ModaldashedicionpersComponent implements OnInit {
  form!: FormGroup;
  
  //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}

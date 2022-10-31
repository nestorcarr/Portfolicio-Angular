import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-modaleditardash',
  templateUrl: './modaleditardash.component.html',
  styleUrls: ['./modaleditardash.component.css']
})
export class ModaleditardashComponent implements OnInit {
  form!: FormGroup;

   //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-modaldashmaspers',
  templateUrl: './modaldashmaspers.component.html',
  styleUrls: ['./modaldashmaspers.component.scss']
})
export class ModaldashmaspersComponent implements OnInit {
  form: FormGroup;
  Name: any;
 //Inyectar en el constructor el formBuilder
  constructor(
    private formBuilder: FormBuilder
  ) { 
    //Creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      //   password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
         email: ['', [Validators.required, Validators.email]]
        
       })
  }

  ngOnInit(): void {
  }

}

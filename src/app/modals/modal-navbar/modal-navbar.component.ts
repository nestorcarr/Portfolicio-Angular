import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a utilizar
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-modal-navbar',
  templateUrl: './modal-navbar.component.html',
  styleUrls: ['./modal-navbar.component.scss']
})
export class ModalNavbarComponent implements OnInit {
  form: FormGroup;

  //Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
    })
   }

  ngOnInit(): void {
  }
  get Password(){
    return this.form.get("password");
  }
  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get PasswordValid(){
    return this.Password?.valid;
  }
  get Mail(){
    return this.form.get("email");
  }
  get MailInvalid(){
    return this.Mail?.touched && !this.Mail?.valid;
    ;
  }
  get MailValid(){
    return this.Mail?.valid;
    ;
  }
  onEnviar(event: Event){
    //Detenemos la ejecucion del comportamiento submit de un form
    event.preventDefault;

    if(this.form.valid){
      //LLamamos a nuestro servicio para enviar los datos al servidor
      //Tambien podriamos ejecutar alguna logica extra
      alert("Todo salio ok ¡Enviar formulario!")
    }else{
      //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }

}

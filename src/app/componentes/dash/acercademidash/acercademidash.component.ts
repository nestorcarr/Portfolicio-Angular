import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../service/info/info.service';
@Component({
  selector: 'app-acercademidash',
  templateUrl: './acercademidash.component.html',
  styleUrls: ['./acercademidash.component.css']
})
export class AcercademidashComponent implements OnInit {
    //Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
  //acercademiUno: any;
  nombre: string = '';
  apellido: string = '';
  profesion: string = '';
  acerca_de_mi: string = '';
  acercademi: string = '';

  constructor(
    //Inyectar el Servicio para tener acceso en la Clase a los Metodos
    private infoService: InfoService
  ) { }

  ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //this.acercademiUno = db.uno;
     //Definir informacion a mostrar, imagenprincipal es la variable creada y imageprincipal viene del Json
     this.nombre = bd.nombre;
     this.apellido = bd.apellido;
     this.profesion = bd.profesion;
     this.acerca_de_mi = bd.acerca_de_mi;
     this.acercademi = bd.acercademi;

    });
  }

}

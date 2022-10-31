import { Component, OnInit } from '@angular/core';
//Importo el servicio
import { InfoService } from '../../../service/info/info.service';

@Component({
  selector: 'app-carouseldash',
  templateUrl: './carouseldash.component.html',
  styleUrls: ['./carouseldash.component.css']
})
export class CarouseldashComponent implements OnInit {
//Inicializo y Creo la variable de instancia para almacenar los datos que trata el servicio
//carousel: any=[];
carouselimag: any="";
carouselimage: any="";
carouselimagen: any="";
imageprincipal: any="";

  constructor(
    private infoService: InfoService
  ) { }

  ngOnInit() {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el servicio?
    this.infoService.getDatos().subscribe(bd => {
      console.log(bd);
     //Definir informacion a mostrar
     this.carouselimag = bd.carouselimag;
     this.carouselimage = bd.carouselimage;
     this.carouselimagen = bd.carouselimagen;
     this.imageprincipal = bd.imageprincipal;
    });
  }

}

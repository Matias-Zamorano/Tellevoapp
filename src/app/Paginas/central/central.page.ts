import { Component, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
})
export class CentralPage{
  
  dato:any;//genero variable any (permite cualquier valor)
  constructor(public toastController: ToastController,private activeroute:ActivatedRoute, private router: Router) {
    
    this.activeroute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });
  }

  programar_viaje(){
    this.presentToast1();
  }
  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'esto puede tardar algunos min pero se busca lo mejor para su comodidad',
      duration: 2000
    });
    toast.present();
  }

  buscar_vehiculo(){
    this.presentToast2();
  }
  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'esto puede tardar algunos min pero se busca lo mejor para su comodidad',
      duration: 2000
    });
    toast.present();
  }
}

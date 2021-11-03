import { Component,  } from '@angular/core';
import { ActivatedRoute,NavigationExtras ,Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page{
  dato:any;

  constructor(public toastController: ToastController, private activeroute2:ActivatedRoute, private router2: Router) { 
    
    this.activeroute2.queryParams.subscribe(params =>{
      if(this.router2.getCurrentNavigation().extras.state){
        this.dato=this.router2.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });
  };

  guardar_contra(){
    //llama al boton falso
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contraseña nueva guardada correctamente',
      duration: 2000
    });
    toast.present();
  }

  volver_inicio(){
    let NavigationExtras: NavigationExtras={
      state:{dato:this.dato}
     };
    //navego hacia la pagina central y envio parametro
    this.router2.navigate(['/home'],NavigationExtras);
  }
  
  
  
  
  
  

}

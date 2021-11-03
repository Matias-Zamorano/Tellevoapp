import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras ,Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  dato:any;

  constructor(public toastController: ToastController, private router1: Router ,private activeroute1:ActivatedRoute) { 
    
    this.activeroute1.queryParams.subscribe(params =>{
      if(this.router1.getCurrentNavigation().extras.state){
        this.dato=this.router1.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });
  }
  guardar_usuario(){
    //llamar al boton falso
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario guardado correctamente',
      duration: 2000
    });
    toast.present();
  }

  pagina_inicio(){

    let NavigationExtras: NavigationExtras={
      state:{dato:this.dato}
     };
    //navego hacia la pagina central y envio parametro
    this.router1.navigate(['/home'],NavigationExtras);
  }

  ngOnInit(){
    
  }

}

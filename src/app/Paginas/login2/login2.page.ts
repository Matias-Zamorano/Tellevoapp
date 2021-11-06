import { Component,  } from '@angular/core';
import { ActivatedRoute,NavigationExtras ,Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page{
  dato:any;
  formulariologin2:FormGroup;

  constructor(public fb:FormBuilder,public alertController:AlertController,public toastController: ToastController, private activeroute2:ActivatedRoute, private router2: Router) { 
    
    this.activeroute2.queryParams.subscribe(params =>{
      if(this.router2.getCurrentNavigation().extras.state){
        this.dato=this.router2.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });

    this.formulariologin2 =this.fb.group({
      'password':             new FormControl ("",Validators.required),
      'confirmacionPassword': new FormControl ("",Validators.required)
    });
  };

  async guardar_contra(){
    //va guardar la contraseña y la antigua 
    var f = this.formulariologin2.value;
    if(this.formulariologin2.invalid){
      const alert = await this.alertController.create({
        header:"Error al guardar",
        message: "Ingrese los datos correctamente",
        buttons: ['aceptar']
      });
      await alert.present();
      
      return;
    }
    var usuario = {
      password: f.password
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));  
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

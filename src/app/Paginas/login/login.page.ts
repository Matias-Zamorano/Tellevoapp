import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras ,Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dato:any;
  formulariologin:FormGroup;

  constructor( public fb: FormBuilder ,public alertController:AlertController,public toastController: ToastController, private router1: Router ,private activeroute1:ActivatedRoute) { 
    
    this.activeroute1.queryParams.subscribe(params =>{
      if(this.router1.getCurrentNavigation().extras.state){
        this.dato=this.router1.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });

    this.formulariologin =this.fb.group({
      'nombre':   new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'numero':   new FormControl("",Validators.required),
      'fecha':    new FormControl("",Validators.required),
      'correo':   new FormControl("",Validators.required),
    });
  }
  async guardar_usuario(){
    //llamar al boton falso
    //this.presentToast();
    var f = this.formulariologin.value;
    
    if(this.formulariologin.invalid){
      const alert = await this.alertController.create({
        header:"Error al Crear el usuario",
        message: "Ingrese los datos correctamente",
        buttons: ['aceptar']
      });
      await alert.present();
      return;
    }
     
     var usuario = {
       nombre:   f.nombre,
       password: f.password,
       numero:  f.numero,
       fecha: f.fecha,
       correo: f.correo
     }

     localStorage.setItem('usuario',JSON.stringify(usuario));
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

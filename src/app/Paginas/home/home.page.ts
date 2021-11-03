import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   dato:string;
   dato1:string;
   dato2:string;
   img:string;
   formulariohome: FormGroup;

   constructor( public fb:FormBuilder,public toastController:ToastController, private activeroute:ActivatedRoute ,private router: Router , private menu : MenuController) {

    this.activeroute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });

    this.formulariohome =this.fb.group({
      'nombre': new FormControl ("",Validators.required),
      'password': new FormControl ("",Validators.required)
    })

   }
   
    ngOnInit(){
      this.img = '../../../assets/img/blanco1.jpg';
    }



 ingresar(){ //esto es para enviar en enlace para la pagina llamada central
   //declaro e instancio un elemento de tipo naviationExtras
   let NavigationExtras: NavigationExtras={
     state:{dato:this.dato}
    };
   //navego hacia la pagina central y envio parametro
   this.router.navigate(['/central'],NavigationExtras);
 } 

 crear(){ 
   let NavigationExtras1: NavigationExtras={
       state:{dato1:this.dato1}
      };
   this.router.navigate(['/login'],NavigationExtras1);
 }

 recuperar(){ 
   let NavigationExtras2: NavigationExtras={
     state:{dato2:this.dato2}
   };
   this.router.navigate(['/login2'],NavigationExtras2);
 }

 openMenu(){
   this.menu.toggle();
 }

 

}

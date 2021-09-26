import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService} from './usuario.service';
@Component({
  selector: 'app-nueva-user',
  templateUrl: './nuevo-user.page.html',
  styleUrls: ['./nuevo-user.page.scss'],
})
export class NuevoUserPage implements OnInit {
  usuario={
    nombre:'',
    apellidos:'',
    email:'',
    password:''
  };

  campo: string;
  constructor(private router: Router,public toastController: ToastController,
    private usuarioService: UsuarioService ) { }

  ngOnInit() {
  }
  registrarContacto(){
    if(this.validateModel(this.usuario)){
        this.usuarioService.addUsuario(this.usuario.nombre.valueOf(),
          this.usuario.apellidos.valueOf(),
          this.usuario.email.valueOf(),
          this.usuario.password.valueOf());
          this.presentToast('Datos registrados correctamente');
    }
    else
    {
      this.presentToast('Falta completar: '+this.campo);
    }

  }
   /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
    async presentToast(message: string, duration?: number){
      const toast = await this.toastController.create(
        {
          message,
          duration:duration?duration:2000
        }
      );
      toast.present();
    }
    validateModel(model: any){
    for (var [key, value] of Object.entries(model)) {
      if (value==='') {
        this.campo=key;
        return false;
      }
    }
    return true;
  }

}

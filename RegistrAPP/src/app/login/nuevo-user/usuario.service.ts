import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuario: Usuario[]=[
    {
      nombre: 'Lenis',
      apellidos:'Pardo',
      usuario: 'len.pardo',
      password: '123456'
    },
];
  constructor() {
  }
  getUsuario(usuarioInput: string)
  {
    return {
            ...this.listaUsuario.find(usuario => {return usuario.usuario === usuarioInput })
           }
    }
  addUsuario(nombre: string, apellidos: string, usuario: string, password: string)
  {
   
  }
}

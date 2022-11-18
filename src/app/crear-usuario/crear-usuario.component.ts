import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    usuario: '',
    contrasenia: '',
    nombre: '',
    apellido: '',
    fecha:'',
    cargo:''
  });

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              public router: Router) { }

  ngOnInit(): void {
  }

  /** Crea un nuevo usuario dado la información recibida
   * 
   */
  onSubmit(): void {

    let usuario: string;
    let contrasenia: string;
    let nombre: string;
    let apellido: string;
    let fecha: Date;
    let cargo: string;
    let activo: boolean;

    usuario = ''+this.checkoutForm.value.usuario;
    contrasenia = ''+this.checkoutForm.value.contrasenia;
    nombre=''+this.checkoutForm.value.nombre;
    apellido=''+this.checkoutForm.value.apellido;
    fecha= new Date(''+this.checkoutForm.value.fecha);
    cargo=''+this.checkoutForm.value.cargo;
    activo= true;
    this.userService.createUser(usuario, contrasenia, nombre, apellido, fecha, cargo, activo).subscribe({
                                    next: () => {
                                                      this.router.navigateByUrl('/users'); 
                                                    },
                                                    error: (err) =>{
                                                      alert("No se pudo crear el usuario");
                                                    },
    });
    this.checkoutForm.reset();
  }
}
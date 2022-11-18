import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../users/users';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    usuario: '',
    nombre: '',
    apellido: '',
    fecha:'',
    cargo:''
  });

  username: any
  user!: User

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe({
        next: (params) => {
          this.username = params['username'];
          this.userService.searchByUsername(this.username).subscribe({
              next: (result) => {
                  this.user = result;
              }
          })
        }
    })
  }

  /** Modifica un usuario dado una nueva información
   * 
   */
  onSubmit(): void {
    
    let usuario: string;
    let nombre: string;
    let apellido: string;
    let fecha: Date;
    let cargo: string;
    let activo: boolean;

    usuario = ''+this.checkoutForm.value.usuario;
    nombre=''+this.checkoutForm.value.nombre;
    apellido=''+this.checkoutForm.value.apellido;
    fecha= new Date(''+this.checkoutForm.value.fecha);
    cargo=''+this.checkoutForm.value.cargo;
    activo= true;
    this.userService.updateUser(this.username, usuario, nombre, apellido, fecha, cargo, activo).subscribe({
                                    next: () => {
                                                      this.router.navigateByUrl('/users'); 
                                                    },
                                                    error: (err) =>{
                                                      alert("No se pudo modificar el usuario");
                                                    },
    });
    this.checkoutForm.reset();
  }
}
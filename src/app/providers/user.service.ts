import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { URL_SERVICES } from "../config/config";

import { map } from "rxjs/operators";
import swal from "sweetalert";

import { User } from '../models/user.model';




@Injectable({
    providedIn: 'root'
})
export class UserServices {

    public  userOnline:User;
    public  token:string;

    constructor(private http:HttpClient, private router:Router) { 

        this.uploadFromStorage();
    }

    createUser(user: User) {

        let url = `${URL_SERVICES}/usuario`;

        return this.http.post(url, user)
                        .pipe(map((res: any) => {
                            swal("USER SUCCESSFULLY REGISTERED", user.email, "success");
                            return res.usuarioGuardado;
                            })
                        );
    }

    updateUser(id:string, user:User){

        let url = `${URL_SERVICES}/usuario/${id}`

        let headers = new HttpHeaders().set('token', this.token);

        return this.http.put(url,user,{headers}).pipe((map((res:any)=>{
            
            if (res.usuarioActualizado._id === this.userOnline._id) {
                this.saveInStorage(res.usuarioActualizado._id, res.usuarioActualizado, this.token);
            }
            swal("USER SUCCESSFULLY UPDATED", res.usuarioActualizado.email, "success"); 
            return true   
            })))    
    }

    getUsers(){
       
        let url = `${URL_SERVICES}/usuario`;

        return this.http.get(url).pipe(map((response:any)=>{

            return response.usuariosDb
        }))
    }

    searchUsers(input:string){

        let url = `${URL_SERVICES}/search/usuarios/${input}`;

        return this.http.get(url).pipe(map((res:any)=>{
           
            return res.usuarios

        }))
    }

    searchUsersById(id:string){

        let url = `${URL_SERVICES}/searchById/usuarios/${id}`

        let headers = new HttpHeaders().set("token", this.token);

        return this.http.get(url,{headers}).pipe(map((response:any)=>{

            return response.usuarios
        }))
    }


    changeUserStatus(id:string){

        let url = `${URL_SERVICES}/cambiarEstadoUsuario/${id}`

        let headers = new HttpHeaders().set("token", this.token)

        return this.http.put(url,'',{headers}).pipe(map((res:any)=>{

            if(res.usuarioActualizado.estado === true){

                swal('USER ACTIVATED',res.usuarioActualizado.email,'success')
            }else{
                swal("USER DISABLED", res.usuarioActualizado.email, 'success');
            }
           return res
        }))
    }

    login(user:User,rememberMe:boolean=false){

        if (rememberMe) {
            localStorage.setItem("email", user.email);
        } else {
            localStorage.removeItem("email");
        }

         let url = `${URL_SERVICES}/login`;

         return this.http.post(url,user).pipe(map((res:any)=>{

        this.saveInStorage(res.id,res.usuarioDb,res.token)
        
        return res.usuarioDb
     }))
     }

    isLogged() {

        return this.token.length > 5 ? true : false;
    }

    saveInStorage(id: string, user: User, token: string) {

        localStorage.setItem("id", id);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

        this.userOnline = user;
        this.token = token;
    }

    uploadFromStorage() {
        if (localStorage.getItem("token")) {
            this.token = localStorage.getItem("token");
            this.userOnline = JSON.parse(localStorage.
                getItem("user"));
        } else {
            this.token = "";
            this.userOnline = null;
        }
    }

    loginByGoogle(token: string) {

        let url = `${URL_SERVICES}/google`;

        return this.http.post(url,{token}).pipe(
            map((res: any) => {

                if(res.usuarioDb){
                    this.saveInStorage(res.usuarioDb._id, res.usuarioDb, res.token);
                    return true;
                }
                else {
                    swal(res.mensaje)
                    return false;}                
            })
        );
    }

    logout() {
        
        this.userOnline = null;
        this.token = "";

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("id");

        this.router.navigate(["/login"]);
    }

    checkPassword(id:string,password:string){

        let url = `${URL_SERVICES}/usuario/${id}/${password}`

        let headers = new HttpHeaders().set('token',this.token);

        return this.http.get(url,{headers})

    }
}



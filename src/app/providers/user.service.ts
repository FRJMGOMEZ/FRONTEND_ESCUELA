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
        let url = `${URL_SERVICES}/user`;
        return this.http.post(url, user)
                        .pipe(map((res: any) => {
                            swal("USER SUCCESSFULLY REGISTERED", user.email, "success");
                            return res.user;
                            })
                        );
    }
    updateUser(id:string, user:User){
        let url = `${URL_SERVICES}/user/${id}`
        let headers = new HttpHeaders().set('token', this.token);
        return this.http.put(url,user,{headers}).pipe((map((res:any)=>{
            if (res.user._id === this.userOnline._id) {
                this.saveInStorage(res.user._id, res.user, this.token);
            }
            swal("USER SUCCESSFULLY UPDATED", res.user.email, "success"); 
            return res.user  
            })))    
    }

    getUsers(){
        let url = `${URL_SERVICES}/users`;
        return this.http.get(url).pipe(map((res:any)=>{
            return res.users
        }))
    }

    searchUsers(input:string){
        let url = `${URL_SERVICES}/search/users/${input}`;
        return this.http.get(url).pipe(map((res:any)=>{
            return res.users
        }))
    }

    searchUsersById(id:string){
        let url = `${URL_SERVICES}/searchById/users/${id}`
        let headers = new HttpHeaders().set("token", this.token);
        return this.http.get(url,{headers}).pipe(map((res:any)=>{
            return res.users
        }))
    }

    changeUserStatus(id:string){
        let url = `${URL_SERVICES}/changeUserStatus/${id}`
        let headers = new HttpHeaders().set("token", this.token)
        return this.http.put(url,'',{headers}).pipe(map((res:any)=>{
            if(res.user.status === true){
                swal('USER ACTIVATED',res.user.email,'success')
            }else{
                swal("USER DISABLED", res.user.email, 'success');
            }
           return res.user
        }))
    }
    
    deleteUser(id:string){
        let url = `${URL_SERVICES}/user/${id}`
        let headers = new HttpHeaders().set("token", this.token);
        return this.http.delete(url,{headers}).pipe(map((res:any)=>{
            return res.user
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
        this.saveInStorage(res.id,res.user,res.token)
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
            this.userOnline = JSON.parse(localStorage.getItem("user"));
        } else {
            this.token = "";
            this.userOnline = null;
        }
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
        let url = `${URL_SERVICES}/user/${id}/${password}`
        let headers = new HttpHeaders().set('token',this.token);
        return this.http.get(url,{headers})
    }
}



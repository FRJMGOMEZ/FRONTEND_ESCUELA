import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { URL_SERVICES } from "../config/config";

import { map } from "rxjs/operators";
import swal from "sweetalert";

import { User, UserOrder } from '../models/user.model';
import { Subject } from 'rxjs';




@Injectable({
    providedIn: 'root'
})
export class UserServices {

    public  userOnline:User;
    public  token:string;

    public usersSource = new Subject<UserOrder>();
    public users$ = this.usersSource.asObservable();

    public count:number

    constructor(private http:HttpClient, private router:Router) { 
        this.uploadFromStorage();
    }

    createUser(user: User) {
        let url = `${URL_SERVICES}/user`;
        return this.http.post(url, user)
                        .pipe(map((res: any) => {
                            swal("USER SUCCESSFULLY REGISTERED", user.email, "success");
                            })
                        );
    }

    updateUser(id:string, user:User){
        let url = `${URL_SERVICES}/user/${id}`
        let headers = new HttpHeaders().set('token', this.token);
        return this.http.put(url,user,{headers}).pipe((map((res:any)=>{
            if (res.user._id === this.userOnline._id) {
                this.saveInStorage(res.user._id, res.user, this.token)
            }
                let userOrder=new UserOrder(res.user,'update')
                this.usersSource.next(userOrder)
            
            swal("USER SUCCESSFULLY UPDATED", res.user.email, "success"); 
            return res.user  
            })))    
    }

    updateUserfromOutside(user:User){
        let userOrder = new UserOrder(user,'update')
        this.usersSource.next(userOrder)
    }

    getUsers(from:number=0,limit:number=5){
        let url = `${URL_SERVICES}/users?from=${from}&limit=${limit}`;
        let headers = new HttpHeaders().set('token', this.token);
        return this.http.get(url,{headers}).pipe(map((res:any)=>{
            this.count = res.count;
            res.users.forEach(user => {
                let userOrder = new UserOrder(user,'get')
                this.usersSource.next(userOrder)
            });
            return res.users
        }))
    }

    searchUsers(input: string, from: number = 0, limit: number = 5){
        let url = `${URL_SERVICES}/search/users/${input}?from=${from}&limit=${limit}`;
        return this.http.get(url).pipe(map((res:any)=>{
            this.count = res.count
            res.users.forEach(user => {
                let userOrder = new UserOrder(user, 'get')
                this.usersSource.next(userOrder)
            });
        }))
    }

    searchUserById(id:string){
        let url = `${URL_SERVICES}/searchById/user/${id}`
        let headers = new HttpHeaders().set("token", this.token);
        return this.http.get(url,{headers}).pipe(map((res:any)=>{
            return res.user
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
           let userOrder = new UserOrder(res.user,'update');
           this.usersSource.next(userOrder)
        }))
    }
    
    deleteUser(id:string){
        let url = `${URL_SERVICES}/user/${id}`
        let headers = new HttpHeaders().set("token", this.token);
        return this.http.delete(url,{headers}).pipe(map((res:any)=>{
            this.count--
            let userOrder = new UserOrder(res.user,'delete');
            this.usersSource.next(userOrder)
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
             console.log(res)
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



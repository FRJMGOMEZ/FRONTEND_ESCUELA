import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { URL_SERVICES } from "../config/config";
import { map, catchError, tap } from "rxjs/operators";
import { User} from '../models/user.model'
import { ErrorHandlerService } from './error-handler.service';
import { Socket } from 'ngx-socket-io';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserServices {

    headers : HttpHeaders
    userOnline:User;
    token:string
    users:User[]=[]
    socketOn:boolean=false

    count:number
    constructor(private http:HttpClient,
                private router:Router,
                private _errorHandler:ErrorHandlerService,
                private socket:Socket) {

        this.token = localStorage.getItem('token');
        this.headers = new HttpHeaders().set('token',this.token)
        this.uploadFromStorage();
    }


    postUser(user: User) {
        let url = `${URL_SERVICES}user`;
        return this.http.post(url, user).pipe(map((res:any)=>{
            Swal.fire({
                text: res.message,
                type: 'info',
                showCloseButton: true,
                heightAuto: false
            })
        })
         ,catchError(this._errorHandler.handleError)
        )
    }

    login(credentials:any, rememberMe:boolean=false) {
           if (rememberMe) {
               localStorage.setItem("email",credentials.email);
           } else {
               localStorage.removeItem("email");
           }
        let url = `${URL_SERVICES}login`;
        return this.http.post(url,credentials).pipe(map((res: any) => {
              return res;
        })
        ,catchError(this._errorHandler.handleError))
    }

    checkToken(): Observable<boolean> {

        let token = localStorage.getItem('token') ? localStorage.getItem('token') :'';

        if(token){
            let user = localStorage.getItem('user');
            let userId = user ? JSON.parse(user)._id : 'noUser';
            let headers = new HttpHeaders().set('token', token);

            return this.http.put(`${URL_SERVICES}checkToken`, { userId }, { headers }).pipe(map((res: any) => {
                if (res.user) {
                    this.saveInStorage(res.user._id, res.user, res.token);
                    Swal.fire({
                        title: `¡Hola! bienvenido/a a la DEMO de mi proyecto CARGOMUSICAPP`,
                        text: `Se te ha asignado aleatoriamente el usuario: ${res.user.name.toUpperCase()} ${res.user.surname || ''}, gracias por la visita`,
                        type: "info",
                        showCloseButton: true,
                        heightAuto: false
                    })
                    return true;
                } else {
                    if (res.token) {
                        this.saveInStorage(this.userOnline._id, this.userOnline, res.token);
                        return true
                    } else {
                        this.router.navigate(['/login']).then(() => {
                            Swal.fire(
                                {
                                    type: 'info',
                                    text: res.message,
                                    showCloseButton: true,
                                    heightAuto: false
                                })
                        })
                        return false
                    }
                }
            }))
        }
        return of(true).pipe(tap(()=>{
            this.router.navigate(['/login'])
        }))
    }

    checkRole(){
        if(this.userOnline.role === 'ADMIN_ROLE'){
            return true
        }else{
            return false
        }
    }

    saveInStorage(id: string, user: User, token: string) {
        return new Promise(async(resolve,reject)=>{
            await localStorage.setItem("id", id);
            await localStorage.setItem("token", token);
            await localStorage.setItem("user", JSON.stringify(user));
            this.userOnline = await user;
            this.token = await token;
            this.headers = await new HttpHeaders().set('token', this.token)
            resolve(true)
        })
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

    getUsers(from: number = 0, limit: number = 5) {
        let url = `${URL_SERVICES}users?from=${from}&limit=${limit}`;
        return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
            this.count = res.count;
            this.users = res.users;
        }))
    }

    putUser(id:string, user:User){
        let url = `${URL_SERVICES}user/${id}`
        return this.http.put(url,user,{headers:this.headers}).pipe((map((res:any)=>{
            if (res.user._id === this.userOnline._id) {
                this.saveInStorage(res.user._id, res.user, localStorage.getItem('token'))
                this.userOnline = res.user;
            }else{
               this.users.forEach((user,index)=>{
                   if(user._id === res.user._id){
                       this.users[index]=res.user;
                   }
               })
            }
        }))
            , catchError(this._errorHandler.handleError)
        )
    }

    searchUsers(input: string, from: number = 0, limit: number = 5){
        let url = `${URL_SERVICES}search/users/${input}?from=${from}&limit=${limit}`;
        return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
            this.count = res.count;
            this.users = res.users;
        })
        ,catchError(this._errorHandler.handleError))
    }

    async logout() {
      let payload = await {user:this.userOnline._id}
      await this.socket.emit('logOut',payload)
          this.token = "";
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("id");
          this.router.navigate(["/login"]).then(() => {
              this.userOnline = null;
          })
    }

    userSocketEmit(order: string, user: string) {
        let payload = { order, user }
        this.socket.emit('userSocket', payload)
    }

    userOnlineSocket() {
        return this.socket.fromEvent('userSocket').pipe(map((payload: any) => {
            if (this.userOnline._id === payload.user) {
                if (payload.order === 'delete' || payload.order === 'changeStatus') {
                    this.logout()
                } else if (payload.order === 'changeRole') {
                    if (this.userOnline.role === 'ADMIN_ROLE') {
                        this.userOnline.role = 'USER_ROLE'
                    } else {
                        this.userOnline.role = 'ADMIN_ROLE'
                    }
                    this.saveInStorage(this.userOnline._id, this.userOnline, this.token).then(() => {
                        this.router.navigate(['/dashboard'])
                    })
                }
            }
        }))
    }

    changeUserStatus(id: string) {
        let url = `${URL_SERVICES}changeUserStatus/${id}`
        return this.http.put(url, {}, { headers: this.headers }).pipe(map((res: any) => {
            this.users.forEach((user, index) => {
                if (user._id === res.user._id) {
                    this.users[index].status = res.user.status;
                    this.userSocketEmit('changeStatus', id)
                }
            })
        }),
            catchError(this._errorHandler.handleError))
    }

    deleteUser(id: string) {
        let url = `${URL_SERVICES}user/${id}`
        return this.http.delete(url, { headers: this.headers }).pipe(map((res: any) => {
            this.count--
            this.userSocketEmit('delete', id)
        }),
            catchError(this._errorHandler.handleError))
    }


    changeRole(userId: string, role: string) {
        let url = `${URL_SERVICES}changeRole/${userId}/${role}`
        return this.http.put(url, {}, { headers: this.headers }).pipe(map(() => {
            this.userSocketEmit('changeRole', userId)
        }),
            catchError(this._errorHandler.handleError))
    }
}


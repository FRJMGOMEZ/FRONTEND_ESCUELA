import { Injectable } from '@angular/core';
import { UserServices } from './user.service';
import { timer } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Letter } from '../models/letter.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  public letterSelectedId:string;
  public users: User[] = []
  public letters:any = [];
  public form:FormGroup

  constructor(private _userServices:UserServices,
              private http:HttpClient) { }

  getUsers() {
    this._userServices.getUsers().subscribe(() => {
      timer().subscribe(async () => {
        this.users = await this._userServices.users.filter((user) => { return user.role === 'ADMIN_ROLE' && user._id != this._userServices.userOnline._id });
      })
    })
  }            
  
  getLetters(){
    let url = `${URL_SERVICES}letters`;
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
       this.letters = res.letters;
       if(this.letters.length > 0){
         this.letterSelectedId = this.letters[this.letters.length - 1]._id;
         this.selectLetter();
       }else{
         this.form = new FormGroup({
           name: new FormControl('', Validators.required),
           user: new FormControl('', [Validators.required, Validators.email]),
           content: new FormControl('', Validators.required),
           bottom: new FormControl('', Validators.required)
         })
         this.setNewLetter();
       }
    }))
  }            

  async selectLetter(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      user: new FormControl('', [Validators.required, Validators.email]),
      content: new FormControl('', Validators.required),
      bottom: new FormControl('', Validators.required)
    })
    console.log(this.letterSelectedId);
    let letterSelected = this.letters.filter((letter:Letter)=>{return letter._id === this.letterSelectedId})[0];
    if(letterSelected){
      await letterSelected.content.forEach((extract: string, index: number) => {
        letterSelected.content[index] = letterSelected.content[index].split('\n').join(' ');
      })

      await letterSelected.bottom.forEach((extract: string, index: number) => {
        letterSelected.bottom[index] = letterSelected.bottom[index].split('\n').join(' ');
      })
      this.form.setValue({
        name: letterSelected.name,
        user: letterSelected.user,
        content: letterSelected.content.join('\n'),
        bottom: letterSelected.bottom.join('\n'),
      })

    }else{
      this.setNewLetter();
    }
  }

  setNewLetter(){
    this.letterSelectedId=undefined;
    this.form.setValue({
      name:'',
      user: '',
      content: '',
      bottom: '',
    })
  }

  saveLetter(){
    let newLetter={content:[],bottom:[],user:undefined,name:undefined};
    
    let value = this.form.value;

    newLetter.content = value.content.split('\n');
    newLetter.content.forEach((extract:string,index:number) => {
       newLetter.content[index].split(' ').join('\n'); 
    });
    newLetter.bottom = value.bottom.split('\n');
    newLetter.bottom.forEach((extract: string, index: number) => {
      newLetter.bottom[index].split(' ').join('\n');
    });
    newLetter.user = value.user;
    newLetter.name = value.name;

    if(!this.letterSelectedId){
      console.log('setNeLetter');
      let url = `${URL_SERVICES}letter`
      return this.http.post(url, newLetter, { headers: this._userServices.headers }).pipe(map((res: any) => {
        this.letters.push(res.letter);
        this.letterSelectedId = res.letter._id;
        Swal.fire({
          text: `Nuevo modelo ${this.form.value.name} creado`,
          showCloseButton: true,
          type: "success"
        }).then(()=>{
          this.selectLetter()
        })       
      }))
    }else{
      console.log(this.letterSelectedId);
      let url = `${URL_SERVICES}letter/${this.letterSelectedId}`
      return this.http.put(url, newLetter, { headers: this._userServices.headers }).pipe(map((res: any) => {
        this.letters.forEach((letter:Letter,index:number)=>{
          if(letter._id === res.letter._id){
            this.letters[index] = res.letter;
          }
        })
        Swal.fire({
          text: `Modelo ${this.form.value.name} modificado`,
          showCloseButton: true,
          type: "success"
        }).then(()=>{
          this.selectLetter();
        })
      }))
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'BOOKMYEVENT';
 todos:string='';
 array:string[]=[]; 

country_id:any;
city_id:any;
state_id:any;

 public country:any []=[

  {
    "id":1,
    "name":"india",
    "con_id":1
    

  },
  {
    "id":2,
    "name":"srilanka",
    "con_id":2
    
  }

 ];
public state:any[]=[
   {

    "id":1,
    "name":"telangana",
    "st_id":1,
    "con_id":1
   },
   {

    "id":2,
    "name":"Andhra Pradesh",
    "st_id":2,
    "con_id":1
   },
   {

    "id":3,
    "name":"colombo",
    "st_id":3,
    "con_id":2
   }
  
  
 ];
 public city:any[]=[
   {
    
  "id":1,
  "name":"hyderabad",
  "st_id":1,
  "con_id":1,
  

   },
   {
    "id":2,
    "name":"amaravathi",
    "st_id":2,
    "con_id":1,
   
  },
  {
    "id":3,
    "name":"premadasa",
    "st_id":3,
    "con_id":2,
   
  }
 ];
constructor(private _service:DataService,private _fb:FormBuilder) { }

public changeCountry(){
this.state=this.state.filter(item=>item.con_id==this.country_id);
}
public changeState(){
  this.city=this.city.filter(item=>item.st_id==this.state_id);
}
public changeCity(){

}


public addTodos(){
const existingData=this.array.filter(item=> item.toLowerCase()===this.todos.toLowerCase());
if(existingData.length==0){
  this.array.push(this.todos);
  this.todos='';
}
else{
  this.todos='';
}
 
  
 }



  ngOnInit(): void {
  // this.country=this.country;
  // this.state=this.state;
  // this.city=this.city;
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database: any = {
    1000: { acno: 1000, uname: "arshad", password: "1000", balance: 5000 },
    2000: { acno: 2000, uname: "Ajmal", password: "2000", balance: 10000 },
    3000: { acno: 3000, uname: "Jaleel", password: "3000", balance: 15000 },
    4000: { acno: 4000, uname: "fuad", password: "4000", balance: 20000 }
  }
  loggedUser=""

  constructor(private router: Router) { }

  // registration function

  register(uname:any,acno:any,password:any) {

    var db = this.database
    if (acno in db) {
      return false

    }
    else {

      db[acno] = {
        acno,
        uname,
        password,
        balance:0
      }
      console.log(db)
      return true
    }
  }

  // login function

  login(acno:any, pswd:any) {


    let db = this.database

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        this.loggedUser=db[acno]["uname"]

        return true

      }
      else {
        alert("Invalid Password")
        return false
      }
    }
    else {
      alert("invalid Account Number")
      return false
    }
  }


  //deposit

deposit(acno:any,pswd:any,amt:any)
{ 
  let db=this.database
  var amount=parseInt(amt)

  if(acno in db)
  {
     if(pswd==db[acno]["password"])
     {
       db[acno]["balance"]+=amount
       return db[acno]["balance"]
     }
     {
       alert("invalid password")
       return false
     }

  }
  else{
    alert("Invalid Account Number")
    return false
  }


}

//withdraw

withdraw(acno:any,pswd:any,amt:any)
{ 
  let db=this.database
  var amount=parseInt(amt)

  if(acno in db)
  {
     if(pswd==db[acno]["password"])
     {
       db[acno]["balance"]-=amount
       return db[acno]["balance"]
     }
     {
       alert("invalid password")
       return false
     }

  }
  else{
    alert("Invalid Account Number")
    return false
  }


}


}



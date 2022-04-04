import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // acno=""
  // pswd=""
  // amt=""

  // acno1=""
  // pswd1=""
  // amt1=""

  user=""
  acno:any
  ldate:any

  constructor(private ds:DataService,private fb:FormBuilder ,private router:Router) {
      this.user=ds.loggedUser
      this.ldate= new Date()
    }
  
  depositForm=this.fb.group({

    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
withdrawForm=this.fb.group({

  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt1:['',[Validators.required,Validators.pattern('[0-9]*')]]

  
})


  ngOnInit(): void {
    if(! localStorage.getItem("currentAcno"))
    {
       alert("Please Login ")
       this.router.navigateByUrl("")

    }
  }

  deposit(){

   

    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd
    var amt=this.depositForm.value.amt

    if(this.depositForm.valid)
    {
      var result=this.ds.deposit(acno,pswd,amt)

      if(result)
      {
        alert(`you success fully deposit ${amt}.available balance ${result}`)
      }
  

    }
    else{
      alert("invalid form")
    }




  }
  withdraw(){

   

    var acno=this.withdrawForm.value.acno1
    var pswd=this.withdrawForm.value.pswd1
    var amt=this.withdrawForm.value.amt1
   if(this.withdrawForm.valid)
   {
    var result=this.ds.withdraw(acno,pswd,amt)

    if(result)
    {
      alert(`you success fully deposit ${amt}.available balance ${result}`)
    }


   }
   else
   {
     alert("invalid form")
   }
    




  }

  logOut()
  {
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
    
  }
  deleteAcc()
  {
    this.acno=localStorage.getItem("currentAcno")

  }
  cancelFromParent()
  {
    this.acno=""
  }


}

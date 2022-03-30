import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amt=""

  acno1=""
  pswd1=""
  amt1=""

  user=""

  constructor(private ds:DataService) { 
    this.user=ds.loggedUser
  }

  ngOnInit(): void {
  }

  deposit(){

   

    var acno=this.acno
    var pswd=this.pswd
    var amt=this.amt

    
    var result=this.ds.deposit(acno,pswd,amt)

    if(result)
    {
      alert(`you success fully deposit ${amt}.available balance ${result}`)
    }




  }
  withdraw(){

   

    var acno=this.acno1
    var pswd=this.pswd1
    var amt=this.amt1

    
    var result=this.ds.withdraw(acno,pswd,amt)

    if(result)
    {
      alert(`you success fully deposit ${amt}.available balance ${result}`)
    }




  }


}

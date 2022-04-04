import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions:any
  acno:any
  balance:any

  constructor(private ds:DataService) { 

    this.acno=JSON.parse(localStorage.getItem("currentAcno") ||"")
    this.transactions=ds.getTransaction(this.acno)
    this.balance=ds.database[this.acno]["balance"]
    console.log(this.transactions);
    


  }

  ngOnInit(): void {
  }

}

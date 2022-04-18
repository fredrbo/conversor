import { Component, OnInit } from '@angular/core';
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(private converterService: ConverterService) { }

  money: number ;
  currentBid: number;
  result: string;

  to: string = "USD";
  from: string = "BRL";

  ngOnInit(): void {
    this.getBid();
  }
  invert(){
    let aux;
    aux = this.to
    this.to = this.from
    this.from = aux
    this.convert()
  }

  convert() {
    if (this.money == undefined){
      alert(`Valor em ${this.to} não definido `)
    }else{
      this.getBid();
      this.result = (this.money * this.currentBid).toFixed(2);
    }
}

  getBid(): void {
    this.converterService.getConvert(this.to, this.from).subscribe(
      data => {
       this.currentBid =  data[0].bid
      }
    )
  }

}

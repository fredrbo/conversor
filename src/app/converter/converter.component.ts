import { Component, OnInit } from '@angular/core';
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(private converterService: ConverterService) { }

  value: number ;
  currentValue: number;
  result: number;

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
    if (this.value == undefined){
      alert(`Valor em ${this.to} não definido `)
    }else{
      this.getBid();
      this.result = (this.value * this.currentValue);
    }
}

  getBid(): void {
    this.converterService.getConvert(this.to, this.from).subscribe(
      data => {
       this.currentValue =  data[0].bid
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter/converter.service';

@Component({
  selector: 'app-mult-converter',
  templateUrl: './mult-converter.component.html',
  styleUrls: ['./mult-converter.component.css']
})
export class MultConverterComponent implements OnInit {

  constructor(private converterService: ConverterService) { }

  data = JSON.parse(localStorage.getItem('data')!)

  newItem = [{ value: 0, result: '' }]
  money: any;
  currentBid: number;
  result: string;

  to: string = "USD";
  from: string = "BRL";

  initStorage() {
    //verifica se local storage está vazio
    if (JSON.parse(localStorage.getItem('data')!) == null) {
      localStorage.setItem('data', JSON.stringify(this.newItem))
      this.data.push({ value: null, result: '' })
    }
    this.getBid();
  }

  ngOnInit() {
    this.initStorage()
  }

  convert() {
    this.getBid();
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].result = (this.data[i].value * this.currentBid).toFixed(2)
    }
    localStorage.setItem('data', JSON.stringify(this.data))
  }

  delete(index: any) {
    this.data.splice(index, 1)
    localStorage.setItem('data', JSON.stringify(this.data))
  }

  add() {
    this.data.push({ value: null, result: '' })
  }

  getBid(): void {
    this.converterService.getConvert(this.to, this.from).subscribe(
      data => {
        this.currentBid = data[0].bid
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  html_string: string;
  nama_variabel: string;
  variabel_tanggal: Date;
  variabel_undefined: any;

  constructor() {
    this.html_string = "&lt;&gt;&sup2;&#65371;&#65373;"
    this.variabel_tanggal = new Date();
  }

  ngOnInit() {
  }

  brace(data){
    return "{{ "+data+" }}";
  }

  changeNamaVariabel(nama){
    this.nama_variabel = nama;
  }

  ambilWaktu(){
    return new Date();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  namaTitle: string;
  variabelModel: string;

  constructor() {
    this.namaTitle = "Judul saya";
  }

  ngOnInit() {
  }

  brace(data){
    return "{{ "+data+" }}";
  }

  alert(data){
    alert(data);
  }

  setDariComponent(data){
    this.variabelModel = data;
  }

}

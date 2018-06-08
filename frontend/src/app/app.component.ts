import { Component } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  baseUrl = 'http://localhost:8080/starwars/';

  // így néz ki egy spaceship objektum
  //   {
  //     "_id": "5b1a43709d8c91c0e62778d7",
  //     "id": 1,
  //     "consumables": "1 year",
  //     "denomination": "CR90 corvette",
  //     "cargo_capacity": 3000000,
  //     "passengers": 600,
  //     "max_atmosphering_speed": 950,
  //     "crew": 165,
  //     "lengthiness": 150,
  //     "model": "CR90 corvette",
  //     "cost_in_credits": 3500000,
  //     "manufacturer": "Corellian Engineering Corporation",
  //     "image": "cr90_corvette.jpg"
  // }

  newSpaceship = {
    id: '',
    consumables: '',
    denomination: '',
    cargo_capacity: '',
    passengers: '',
    max_atmosphering_speed: '',
    crew: '',
    lengthiness: '',
    model: '',
    cost_in_credits: '',
    manufacturer: '',
    image: '',
  };

  spaceship = {
    _id: '',
    id: '',
    consumables: '',
    denomination: '',
    cargo_capacity: '',
    passengers: '',
    max_atmosphering_speed: '',
    crew: '',
    lengthiness: '',
    model: '',
    cost_in_credits: '',
    manufacturer: '',
    image: '',
  };

  datas: any = [];

  // feltölti a datas-t
  constructor(public http: Http) {
    this.getAll();
  }

  ngOnInit() {
  }

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error:' + JSON.stringify(res.error));
    } else {
      this.datas = res;
    }
  }

  // feltölti a datas tömböt, benne a products objektumokkal
  getAll() {
    this.http.get(this.baseUrl).subscribe(
      data => {
        this.datas = data;
        this.errorHandling(data);
      });
  }

  // elküldjük az új adatokat a formból
  create() {
    console.log(this.newSpaceship);
    this.http.post(this.baseUrl, this.newSpaceship).subscribe(
      () => {
        // this.errorHandling(data);
        this.getAll();
        // this.newSpaceship = JSON.parse(data['_body']);
      });
  }


  update() {
    this.http.put(`http://localhost:8080/starwars/${this.spaceship['_id']}`, this.spaceship).subscribe(
      data => {
        this.errorHandling(data);
        this.getAll();
      });
  }

  updateByModal(id) {
    const chosen = this.datas.filter(item => item._id === id)[0];
    this.spaceship = Object.assign({}, chosen);
  }

  delete(id) {
    if (confirm('Biztosan törölni szeretné?')) {
      this.http.delete(`http://localhost:8080/starwars/${id}`).subscribe(
        data => {
          this.errorHandling(data);
          console.log(data);
          this.getAll();
        });
    }
  }


}

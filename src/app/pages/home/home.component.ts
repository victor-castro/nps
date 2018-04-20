import { Component, OnInit } from '@angular/core';

import { GeralService } from '../../providers/geral.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private geralService: GeralService) { }

  ngOnInit() {

  	this.geralService
  		.auth()
  		.subscribe(
			res => {
				console.log(res);

	  		}, err => {
	  			console.log(err);
	  		});

  }

}

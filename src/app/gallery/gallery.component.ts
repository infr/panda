import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const panda1: String = 'Panda eating bamboo';
    const panda2: String = 'Panda eating bamboo';
    const panda3: String = 'Panda eating bamboo';
    const panda4: String = 'Panda eating bamboo';
    const id = +this.route.snapshot.params['id'];
  }

}

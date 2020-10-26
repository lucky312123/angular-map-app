import { Component, Input, OnInit } from '@angular/core';
import { MapPoint } from '../models/map-point.model';

@Component({
  selector: 'app-map-point',
  templateUrl: './map-point.component.html',
  styleUrls: ['./map-point.component.css'],
})
export class MapPointComponent implements OnInit {
  @Input()
  mapPoint: MapPoint;
  constructor() {}

  ngOnInit(): void {}
}

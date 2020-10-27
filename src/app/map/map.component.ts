import { Component, OnInit } from '@angular/core';
import {
  icon,
  latLng,
  LeafletMouseEvent,
  Map,
  MapOptions,
  marker,
  tileLayer,
} from 'leaflet';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '../app.consts';
import { MapPoint } from '../models/map-point.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: Map;
  lastLayer: any;
  mapPoint: MapPoint;
  options: MapOptions;
  isHidden = true;

  constructor() {}

  ngOnInit(): void {
    this.initializeMapOptions();
    this.initializeDefaultMapPoint();
  }

  private initializeDefaultMapPoint() {
    this.mapPoint = {
      name: 'Punkt',
      latitude: DEFAULT_LATITUDE,
      longitude: DEFAULT_LONGITUDE,
    };
  }

  initializeMap(map: Map) {
    this.map = map;
    this.createMarker();
  }

  private createMarker() {
    this.clearMap();
    const mapIcon = this.getDefaultIcon();
    const coordinates = latLng([
      this.mapPoint.latitude,
      this.mapPoint.longitude,
    ]);
    this.lastLayer = marker(coordinates)
      .setIcon(mapIcon)
      .on('click', this.hidden.bind(this))
      .addTo(this.map);
    this.map.setView(coordinates, this.map.getZoom());
  }

  hidden() {
    this.isHidden = !this.isHidden;
  }

  private getDefaultIcon() {
    return icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
    });
  }

  private initializeMapOptions() {
    this.options = {
      zoom: 14,
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: 'OSM',
        }),
      ],
    };
  }

  onMapClick(e: LeafletMouseEvent) {
    this.clearMap();
    this.updateMapPoint(e.latlng.lat, e.latlng.lng);
    this.createMarker();
  }

  private updateMapPoint(latitude: number, longitude: number, name?: string) {
    this.mapPoint = {
      latitude: latitude,
      longitude: longitude,
      name: name ? name : this.mapPoint.name,
    };
  }

  private clearMap() {
    if (this.map.hasLayer(this.lastLayer)) this.map.removeLayer(this.lastLayer);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google : any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  map : any;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.loadMap();
  }

  loadMap(){
    let mapEle = document.getElementById('map');
    Geolocation.getCurrentPosition().then((pos) =>{
       let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

       let mapOptions = {
         center : latLng,
         zoom : 15,
         mapTypeId : google.maps.MapTypeId.RoadMap,
         disabledefaultUI: true
       }

        this.map = new google.maps.Map(mapEle,mapOptions);

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
               mapEle.classList.add('show-map');
           });
    },
  (err)=>{
    console.error('Error when finding your position', err);
  });

  }

}

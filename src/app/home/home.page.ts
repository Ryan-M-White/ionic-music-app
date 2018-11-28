import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  playSong(){
    console.log("play button pressed.")
  }

  pauseSong(){
    console.log("pause button pressed.")
  }

  stopSong(){
    console.log("stop button pressed.")
  }




}

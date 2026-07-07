import { Component, inject } from '@angular/core';
import { submit } from '@angular/forms/signals';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  curtidas = 0;

  curtir() {
    this.curtidas++;
  }
}
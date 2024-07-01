import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent implements OnInit {

  isLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // Oculta el spinner después de 1 segundo
  }
}

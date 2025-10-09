import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from "@core/components";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None
})
export class App implements OnDestroy{
  ngOnDestroy(): void {
    sessionStorage.clear();
  }
}

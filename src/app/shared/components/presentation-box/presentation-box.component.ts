import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation-box',
  standalone: true,
  imports: [],
  templateUrl: './presentation-box.component.html',
  styleUrl: './presentation-box.component.scss',
})
export class PresentationBoxComponent{
  public boBackRoute = input.required<string>();
  public fadeDone = output<void>();

  private readonly _router = inject(Router);

  public goBack(): void {
    this._router.navigate([this.boBackRoute()]);
  }
}

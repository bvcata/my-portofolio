import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ModalStore } from 'app/core/store/modal/modal-store';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  public store = inject(ModalStore);
}

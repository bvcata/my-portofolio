import { TemplateRef } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface ModalState {
  isOpen: boolean;
  modalContent: TemplateRef<unknown> | undefined;
}

export const modalInitialState: ModalState = {
  isOpen: false,
  modalContent: undefined,
};

export const ModalStore = signalStore(
  { providedIn: 'root' },
  withState(modalInitialState),
  withMethods((store) => ({
    openModal(modalContent: TemplateRef<unknown>) {
      patchState(store, { isOpen: true, modalContent });
    },
    closeModal() {
      patchState(store, { isOpen: false, modalContent: undefined });
    },
  }))
);

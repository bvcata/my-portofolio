import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export enum AnimationState {
  IDLE,
  TALKING,
}

export interface SideCharacterState {
  animationState: AnimationState;
}

export const sideCharacterInitialState: SideCharacterState = {
  animationState: AnimationState.IDLE,
};

export const SideCharacterStore = signalStore(
  { providedIn: 'root' },
  withState(sideCharacterInitialState),
  withMethods((store) => ({
    startTalking() {
      patchState(store, { animationState: AnimationState.TALKING });
    },
    startIdling() {
      patchState(store, { animationState: AnimationState.IDLE });
    },
  }))
);

import { style, animate, animation, keyframes } from "@angular/animations";

// =========================
// Enum for referencing animations
// =========================
export enum AnimationType {
    Fade = 'fade',
}

// =========================
// Fade
// =========================
export const fadeIn = animation([
    style({ opacity: 0 }), // start state
    animate(
        '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        style({ opacity: 1 })
    )
]);

export const fadeOut = animation([
    animate(
        '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        style({ opacity: 0 })
    )
]);

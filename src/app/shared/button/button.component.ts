import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button [class]="variant()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      
      &.primary {
        background: #007bff;
        color: white;
      }
      
      &.secondary {
        background: #6c757d;
        color: white;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  variant = input<'primary' | 'secondary'>('primary');
}
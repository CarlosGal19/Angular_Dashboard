import { Component, signal } from '@angular/core';
import { Title } from '../../../shared/title/title';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'control-flow',
  imports: [Title],
  templateUrl: './control-flow.html',
})
export class ControlFlow {
  showContent = signal(true);
  grade = signal<Grade>('A');

  toggleContent() {
    this.showContent.update(current => !current);
  }

  frameworks = signal(['Angular','Vue','Svelte','Qwik','React']);
  frameworks2 = signal([]);
}

import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, PanelModule, InputTextModule, SplitterModule, MessageModule],
  // url responsible for the component
  // templateUrl: './app.html',
  // "inline" template of the component
  template: `
    <!-- <h1>Hello, {{ title() }}</h1>
      <p>Congratulations! Your app is running. 🎉</p> -->
    <!-- <p-panel header="Header">
          <p class="m-0">
              Valor do contador {{ counter }}
          </p>
            <p-button label="Incrementar 1" (onClick)='incrementar()' />
      </p-panel> -->
    <p-splitter [style]="{ height: '300px' }" class="flex align-items justify-center mb-8">
      <ng-template #panel>
        <h1 class="text-3xl font-bold underline">Logotipo</h1>
      </ng-template>
      <ng-template #panel>
        <!-- [formGroup]="exampleForm"
        (ngSubmit)="onSubmit()" -->
        <form class="flex flex-col gap-4 w-full sm:w-56">
          <div class="flex flex-col gap-1">
            <input
              pInputText
              type="text"
              id="username"
              placeholder="Username"
              formControlName="username"
            />
            <!-- [invalid]="isInvalid('username')" -->
            <!-- @if (isInvalid('username')) {
            <p-message severity="error" size="small" variant="simple"
              >Username is required.</p-message
            >
            } -->
          </div>
          <div class="flex flex-col gap-1">
            <!-- [invalid]="isInvalid('email')" -->
            <input pInputText type="email" id="email" placeholder="Email" formControlName="email" />
            <!-- @if (isInvalid('email')) { @if (exampleForm.get('email')?.errors?.['required']) {
            <p-message severity="error" size="small" variant="simple">Email is required.</p-message>
            } @if (exampleForm.get('email')?.errors?.['email']) {
            <p-message severity="error" size="small" variant="simple"
              >Please enter a valid email.</p-message
            >
            } } -->
          </div>
          <button pButton severity="secondary" type="submit">
            <span pButtonLabel>Submit</span>
          </button>
        </form>
      </ng-template>
    </p-splitter>
  `,
  // css do componente,
  styleUrl: './app.css',
})
export class App {
  // signal  is a reactive state that can be updated and observed by the application's components
  // it can be treated as both a variable and a function
  // protected readonly title = signal('GB');
  // // array of items
  // protected readonly itens = [
  //         { title: 'Explore the Docs', link: 'https://angular.dev' },
  //         { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
  //         { title: 'Prompt and best practices for AI', link: 'https://angular.dev/ai/develop-with-ai'},
  //         { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
  //         { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
  //         { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  // ];
  protected readonly title = signal('GB');
  protected counter = 0;

  incrementar() {
    this.counter++;
  }
}

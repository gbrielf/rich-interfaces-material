import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // url responsible for the component
  templateUrl: './app.html',
  // "inline" template of the component
  // template: `
  //     <h1>Hello, {{ title() }}</h1>
  //     <p>Congratulations! Your app is running. 🎉</p>
  //   `,
  // css do componente
  styleUrl: './app.css'
})
export class App {
  // signal  is a reactive state that can be updated and observed by the application's components
  // it can be treated as both a variable and a function
  protected readonly title = signal('GB');
  // array of items
  protected readonly itens = [
          { title: 'Explore the Docs', link: 'https://angular.dev' },
          { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
          { title: 'Prompt and best practices for AI', link: 'https://angular.dev/ai/develop-with-ai'},
          { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
          { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
          { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ];
}

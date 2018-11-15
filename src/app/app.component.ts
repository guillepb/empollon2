import { Component, OnInit } from '@angular/core';
import { SuiLocalizationService } from 'ng2-semantic-ui';
import es from 'ng2-semantic-ui/locales/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'empollon2';
  quizSetup: any;
  scoreData: any;

  constructor (public localizationService: SuiLocalizationService) {
    // Load the Spanish translations into the Localization Service.
    localizationService.load('es', es);

    // Change default text to temas instead of "Seleccionados".
    localizationService.patch('es', {
      select: {
          multi: {
            selectedMessage: '#{count} temas'
          }
      }
    });

    // Set the current language to Spanish.
    localizationService.setLanguage('es');
  }

  ngOnInit() {
  }
}


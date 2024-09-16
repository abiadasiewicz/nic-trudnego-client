import {Component, OnInit, Renderer2} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private title: Title,
        private meta: Meta,
        private renderer: Renderer2
    ) {
        // Set global meta tags (if applicable)
        this.meta.addTags([
            {
                name: 'description',
                content: 'Weronika Biadasiewicz - neurologopeda, specjalistka w terapii zaburzeń mowy.'
            },
            {
                name: 'keywords',
                content: 'neurologopeda, logopeda, terapia mowy, zaburzenia mowy, terapia dla dzieci, terapia logopedyczna, dyslalia, opóźniony rozwój mowy, autyzm, spektrum autyzmu, terapia dla dorosłych, wybiórczość pokarmowa, nic trudnego, Weronika Biadasiewicz, nic-trudnego, Lipa Piotrowska, Wrocław, Wroclaw, Psie Pole, Widawa, Świniary, Różanka, Osobowice, Kaczeńcowa, Pełczyńska'
            },
            {name: 'robots', content: 'index, follow'},
        ]);

        this.title.setTitle('Weronika Biadasiewicz - Neurologopeda | Logopeda dla dzieci i dorosłych');

        this.addStructuredData();
    }

    addStructuredData() {
        const script = this.renderer.createElement('script');
        script.type = 'application/ld+json';
        script.text = `
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Weronika Biadasiewicz",
      "jobTitle": ["Neurologopeda", "Logopeda"],
      "description": "Pomagam dzieciom i dorosłym w terapii zaburzeń mowy.",
      "url": "https://nic-trudnego.pl",
      "image": "https://nic-trudnego.pl/assets/img/werkapoziomo.jpg",
      "sameAs": "https://www.facebook.com/profile.php?id=61564947129317",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Uniwersytet Gdański"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wrocław",
        "addressRegion": "Dolnośląskie",
        "postalCode": "51-180",
        "streetAddress": "Kaczeńcowa 2"
      }
    }`;
        this.renderer.appendChild(document.head, script);
    }
}

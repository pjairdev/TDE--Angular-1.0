import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

interface IElement {
  style: {
    querySelector: string;
  };
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tentandoFazerOTde';

  constructor(private router: Router) {
  }
    toggleMenu(){
      let dropdownMenu = document.querySelector('.dropdownMenu');
      dropdownMenu?.classList.toggle('show')
    }
    navigationLogin(){
      this.router.navigateByUrl('/usuario/logar')

    }

}

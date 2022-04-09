import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Interfaces/Moment';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css'],
})
export class NewMomentsComponent implements OnInit {
  btnText: string = 'Compartilhar!';

  constructor() {}

  ngOnInit(): void {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    // todo: enviar para o service
    // todo: exibir msg
    // todo: redirect para home
    console.log('Emitiu! Aeeê');
  }
}

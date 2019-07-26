import { Injectable } from '@angular/core';

@Injectable()
export class RecordsService {

  constructor() { }

  getData() {
    return [
      {
        name: 'Raghu',
        online: true
      },

      {
        name: 'Chaithu',
        online: false
      },

      {
        name: 'Juhi',
        online: false
      },

      {
        name: 'Aparna',
        online: true
      },

      {
        name: 'Harini',
        online: true
      },
      {
        name: 'Shivani',
        online: true
      },

      {
        name: 'Sree',
        online: false
      },

      {
        name: 'Alaykya',
        online: false
      },

      {
        name: 'Bhanu',
        online: false
      },

      {
        name: 'Keerthi',
        online: false
      },

      {
        name: 'Sanjana',
        online: false
      },

      {
        name: 'Supraja',
        online: false
      },

      {
        name: 'Yudhay',
        online: false
      },

      {
        name: 'Sai',
        online: false
      },

      {
        name: 'Naga',
        online: false
      },

      {
        name: 'Anusha',
        online: false
      },

      {
        name: 'Nandini',
        online: true
      },

      {
        name: 'Harishitha',
        online: false
      }
    ]
  }
}

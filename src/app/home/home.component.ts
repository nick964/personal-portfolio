import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  DOG_PREFIX = 'rosie';
  CAT_PREFIX = 'coop';
  OTHER_PERFIX = 'other';
  dogPicCount = 6;
  catPicCount = 3;
  otherPicCount = 4;

  usedDogs = [];
  catPics = [1];
  usedOther = [];


  imgUrl = '/assets/images/cat/homepagecoop.jpg';


  constructor() {
  }


  ngOnInit() {
  }

  getNewOtherPic() {
    if (this.usedOther.length === 0) {
      this.buildPicArray(this.usedOther, this.otherPicCount);
    }
    const item = this.usedOther[Math.floor(Math.random() * this.usedOther.length)];
    const selectedCat = this.usedOther.splice(this.usedOther.indexOf(item), 1);
    this.imgUrl = '/assets/images/other/' + this.OTHER_PERFIX + selectedCat + '.jpg';
  }

  getNewCatPic() {
    if (this.catPics.length === 0) {
      this.buildPicArray(this.catPics, this.catPicCount);
    }
    const item = this.catPics[Math.floor(Math.random() * this.catPics.length)];
    const selectedCat = this.catPics.splice(this.catPics.indexOf(item), 1);
    this.imgUrl = '/assets/images/cat/' + this.CAT_PREFIX + selectedCat + '.jpg';
  }

  getNewDogPic() {
    if (this.usedDogs.length === this.dogPicCount) {
      // used all pics, empty array
      this.usedDogs = [];
    }
    let randomPicIndex = this.getRandomInt(1, this.dogPicCount);
    while (this.usedDogs.indexOf(randomPicIndex) !== -1) {
      randomPicIndex = this.getRandomInt(1, this.dogPicCount);
    }
    console.log('setting index to rosie' + randomPicIndex);
    this.imgUrl = '/assets/images/dog/' + this.DOG_PREFIX + randomPicIndex + '.jpg';
    this.usedDogs.push(randomPicIndex);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  buildPicArray(arr: number[], count) {
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }
  }

}

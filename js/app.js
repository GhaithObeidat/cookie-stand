'use strict';
const Seattle = {
  name : 'Seattle',
  cust : 0,
  workingHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookie : 6.3,
  minCust : 23,
  maxCust : 65,
  getCust : function(min,max){
    this.cust=Math.ceil( this.avgCookie * getRandomInt(min,max));
    return this.cust;
  },
  render:function(){

    const title = document.createElement('div');
    document.body.appendChild(title);
    const h1El = document.createElement('h1');
    title.appendChild(h1El);
    h1El.textContent=(this.name);
    const ulEl = document.createElement('ul');
    title.appendChild(ulEl);
    this.workingHours.forEach(hour => {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=(` ${hour}:${this.getCust(this.minCust,this.maxCust)} cookies. ` );
    }) ;

  }

};



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


Seattle.getCust(23,65);
Seattle.render();




const Tokyo = {
  name : 'Tokyo',
  cust : 0,
  workingHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookie : 1.2,
  minCust : 3,
  maxCust : 24,
  getCust : function(min,max){
    this.cust=Math.ceil( this.avgCookie * getRandomInt(min,max));
    return this.cust;
  },
  render:function(){

    const title = document.createElement('div');
    document.body.appendChild(title);
    const h1El = document.createElement('h1');
    title.appendChild(h1El);
    h1El.textContent=(this.name);
    const ulEl = document.createElement('ul');
    title.appendChild(ulEl);
    this.workingHours.forEach(hour => {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=(` ${hour}:${this.getCust(this.minCust,this.maxCust)} cookies. ` );
    }) ;

  }

};
Tokyo.getCust(3,24);
Tokyo.render();


const Dubai = {
  name : 'Dubai',
  cust : 0,
  workingHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookie : 3.7,
  minCust : 11,
  maxCust : 38,
  getCust : function(min,max){
    this.cust=Math.ceil( this.avgCookie * getRandomInt(min,max));
    return this.cust;
  },
  render:function(){

    const title = document.createElement('div');
    document.body.appendChild(title);
    const h1El = document.createElement('h1');
    title.appendChild(h1El);
    h1El.textContent=(this.name);
    const ulEl = document.createElement('ul');
    title.appendChild(ulEl);
    this.workingHours.forEach(hour => {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=(` ${hour}:${this.getCust(this.minCust,this.maxCust)} cookies. ` );
    }) ;

  }

};
Dubai.getCust(11,38);
Dubai.render();


const Paris = {
  name : 'Paris',
  cust : 0,
  workingHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookie : 2.3,
  minCust : 20,
  maxCust : 38,
  getCust : function(min,max){
    this.cust=Math.ceil( this.avgCookie * getRandomInt(min,max));
    return this.cust;
  },
  render:function(){

    const title = document.createElement('div');
    document.body.appendChild(title);
    const h1El = document.createElement('h1');
    title.appendChild(h1El);
    h1El.textContent=(this.name);
    const ulEl = document.createElement('ul');
    title.appendChild(ulEl);
    this.workingHours.forEach(hour => {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=(` ${hour}:${this.getCust(this.minCust,this.maxCust)} cookies. ` );
    }) ;

  }

};
Paris.getCust(20,38);
Paris.render();


const Lima = {
  name : 'Lima',
  cust : 0,
  workingHours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookie : 4.6,
  minCust : 2,
  maxCust : 16,
  getCust : function(min,max){
    this.cust=Math.ceil( this.avgCookie * getRandomInt(min,max));
    return this.cust;
  },
  render:function(){

    const title = document.createElement('div');
    document.body.appendChild(title);
    const h1El = document.createElement('h1');
    title.appendChild(h1El);
    h1El.textContent=(this.name);
    const ulEl = document.createElement('ul');
    title.appendChild(ulEl);
    this.workingHours.forEach(hour => {
      const liEl =document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=(` ${hour}:${this.getCust(this.minCust,this.maxCust)} cookies. ` );
    }) ;

  }

};
Lima.getCust(2,16);
Lima.render();


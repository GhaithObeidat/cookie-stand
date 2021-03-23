'use strict';

let workingHours = ['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
function getRandom(minCust,maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}


const container = document.getElementById('store');
const articleEl = document.createElement('article');
container.appendChild(articleEl);
const tableEl = document.createElement('table');
articleEl.appendChild(tableEl);


console.log(workingHours);



let totaloftotal=0;
let footerdata = [];


for (let i = 0; i < workingHours.length; i++) {
  footerdata.push(0);
}



function footer(){

  const headerRowEl2 = document.createElement('tr');
  tableEl.appendChild(headerRowEl2);
  const td3 =document.createElement('th');
  headerRowEl2.appendChild(td3);
  td3.textContent='Totals';
  for (let i = 0; i < footerdata.length; i++) {
    const td3 =document.createElement('td');
    headerRowEl2.appendChild(td3);
    td3.textContent=footerdata[i];
  }
  for (let i = 0; i < workingHours.length; i++) {
    totaloftotal+= footerdata[i];
  }
  const td4 =document.createElement('td');
  headerRowEl2.appendChild(td4);
  td4.textContent=totaloftotal;
}


function renderHeader(){

  const headerRowEl = document.createElement('tr');
  tableEl.appendChild(headerRowEl);
  const th1El = document.createElement('th');
  headerRowEl.appendChild(th1El);
  for(let i=0; i< workingHours.length; i++)
  {
    const th1El = document.createElement('th');
    headerRowEl.appendChild(th1El);
    th1El.textContent = `${workingHours[i]}`;
  }

  const th3El = document.createElement('th');
  headerRowEl.appendChild(th3El);
  th3El.textContent = 'Daily Location Total';
}


function City(location, maxCust,minCust, avgCookie,cust,cookies,total) {
  this.location = location;
  this.maxCust = maxCust;
  this.minCust=minCust;
  this.avgCookie = avgCookie;
  this.cust=cust;
  this.cookies=cookies;
  this.total=total;
  this.totalstor=[];
}

City.prototype.getCust =function(){
  for (let i=0; i < workingHours.length; i++) {
    this.cust.push( Math.floor(getRandom (this.minCust, this.maxCust)));


  }},

City.prototype.getCookies = function () {
  for (let i=0; i < workingHours.length; i++) {

    this.cookies.push( Math.floor( this.cust[i]*this.avgCookie));
    this.total=this.total+this.cookies[i];
    footerdata[i]+=this.cookies[i];
  }
  this.totalstor.push(this.total);
},

City.prototype.render= function(){
  this.getCust();
  this.getCookies();
  this.cookies;
  this.total;
  const headerRowE2 = document.createElement('tr');
  tableEl.appendChild(headerRowE2);
  const th1El = document.createElement('th');
  headerRowE2.appendChild(th1El);
  th1El.textContent=`${this.location}`;
  for(let i=0; i< workingHours.length; i++)
  {
    const td1El = document.createElement('td');
    headerRowE2.appendChild(td1El);
    td1El.textContent = `${this.cookies[i]}`;

  }
  const td2El = document.createElement('td');
  headerRowE2.appendChild(td2El);
  td2El.textContent=`${this.total}`;


};

renderHeader();
const City1 = new City('Seattle', 65, 23, 6.3,[],[],0);
City1.render();

const City2 = new City('tokyo', 24, 3, 1.2,[],[],0);
City2.render();
const City3 = new City('Dubai', 38, 11, 3.7,[],[],0);
City3.render();
const City4 = new City('Paris', 38, 20, 2.3,[],[],0);
City4.render();
const City5 = new City('Lima', 16, 2, 4.6,[],[],0);
City5.render();
footer();

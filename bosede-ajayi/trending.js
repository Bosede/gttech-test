let trending = document.querySelectorAll('h1');
response = {};
for(let count = 0; count< trending.length; count++) {
response[count] = trending[count].textContent;
}
document.write(JSON.stringify(response));





//{"0":"Senate okays higher institutions for President’s hometown, nine others","1":"Senate okays higher institutions for President’s hometown,","2":"EFCC hands over 116 cars, 20 houses to First Bank ","3":"Suspected F-SARS operative shoots LASTMA official dead","4":"Metele attack: Army confirms 23 soldiers killed, 31 others…","5":"UEFA Champions League top scorers","6":"Brothers behead 10-year-old for N200,000 in Lagos","7":"Arrest Aregbesola for forging police report, PDP tells IGP","8":"Metele attack: No army can have enough equipment for…","9":"Punch videos","10":"Incase you missed it","11":"Interviews","12":"Sports","13":"Interactive","14":"Education","15":"Entertainment","16":"Health","17":"Special Features","18":"Information Technology","19":"Editorial","20":"Opinion","21":"Sex & Relationship"}
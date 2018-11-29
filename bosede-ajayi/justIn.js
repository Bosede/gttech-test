let justIn = document.querySelectorAll('h3');
response = {};
for(let count = 0; count< justIn.length; count++) {
response[count] = justIn[count].textContent;
}
document.write(JSON.stringify(response));




//{"0":"Don’t buy mobile phones from strangers – Police","1":"Police not involved in Akwa Ibom House of Assembly crisis, says CP","2":"UNESCO adds reggae music to global cultural heritage list","3":"Salome Zurabishvili elected as Georgia’s first woman president","4":"BREAKING: Lagos CP orders posthumous trial of F-SARS operative who killed LASTMA official","5":"Akume never wanted me to sign anti-open grazing law — Ortom","6":"ICYMI: Bricklayer jailed for assaulting commercial sex worker","7":"Gabon president leaves Saudi hospital","8":"Police reopen Anambra House of Assembly","9":"US life expectancy drops again as drug overdose deaths climb","10":"ICYMI: Woman protests after rapist was granted parental access to her son","11":"Power supply tops Nigerians’ complaints list, says CPC","12":"UEFA Champions League top scorers","13":"Five ways to manage joint account with your spouse","14":"Investors lobby as PFAs invest N17bn pension funds in infrastructure","15":"Punch Games"}
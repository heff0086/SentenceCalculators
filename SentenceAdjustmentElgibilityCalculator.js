var SEVENTYFIVE = 0.75;
var EIGHTYFIVE = 0.85;

var length_of_confinement = {};
length_of_confinement.years = 10;
length_of_confinement.months = 2;
length_of_confinement.days = 4;
var applicablePercentage = SEVENTYFIVE;

var date_sentence_began = {};
date_sentence_began.year = 2000;
date_sentence_began.month = 0;
date_sentence_began.day = 0;


length_of_confinement.total = length_of_confinement.years * 365 + length_of_confinement.months * 30 + length_of_confinement.days;


var totalDaysToElgibility = Math.floor(length_of_confinement.total * applicablePercentage);

var yearsToElgibility = Math.floor(totalDaysToElgibility / 365);
var monthsToElgibility = Math.floor((totalDaysToElgibility - yearsToElgibility * 365) / 30);
var daysToElgibility = (totalDaysToElgibility - monthsToElgibility * 30 - yearsToElgibility * 365);

var release_elgibility_date = {};
release_elgibility_date.year = date_sentence_began.year + yearsToElgibility;
release_elgibility_date.month = date_sentence_began.month + monthsToElgibility;
release_elgibility_date.day = date_sentence_began.day + daysToElgibility;

if (release_elgibility_date.day >= 30) {
    release_elgibility_date.month += Math.floor(release_elgibility_date.day / 30);
    release_elgibility_date.day = release_elgibility_date.day - release_elgibility_date.month * 30;
}


if (release_elgibility_date.month >= 12) {
    release_elgibility_date.year += Math.floor(release_elgibility_date.month / 12);
    release_elgibility_date.month = release_elgibility_date.month - release_elgibility_date.year * 12;
}

alert("SENTENCE ADJUSTMENT ELIGIBILITY DATE = "+ release_elgibility_date.year +" - " + release_elgibility_date.month +" - " + release_elgibility_date.day);

//>>built
(function(a,b){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?b(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],b):b(a.moment)})(this,function(a){return a.defineLocale("x-pseudo",{months:"J~\u00e1\u00f1\u00fa\u00e1~r\u00fd F~\u00e9br\u00fa~\u00e1r\u00fd ~M\u00e1rc~h \u00c1p~r\u00edl ~M\u00e1\u00fd ~J\u00fa\u00f1\u00e9~ J\u00fal~\u00fd \u00c1\u00fa~g\u00fast~ S\u00e9p~t\u00e9mb~\u00e9r \u00d3~ct\u00f3b~\u00e9r \u00d1~\u00f3v\u00e9m~b\u00e9r ~D\u00e9c\u00e9~mb\u00e9r".split(" "),
monthsShort:"J~\u00e1\u00f1 ~F\u00e9b ~M\u00e1r ~\u00c1pr ~M\u00e1\u00fd ~J\u00fa\u00f1 ~J\u00fal ~\u00c1\u00fag ~S\u00e9p ~\u00d3ct ~\u00d1\u00f3v ~D\u00e9c".split(" "),monthsParseExact:!0,weekdays:"S~\u00fa\u00f1d\u00e1~\u00fd M\u00f3~\u00f1d\u00e1\u00fd~ T\u00fa\u00e9~sd\u00e1\u00fd~ W\u00e9d~\u00f1\u00e9sd~\u00e1\u00fd T~h\u00fars~d\u00e1\u00fd ~Fr\u00edd~\u00e1\u00fd S~\u00e1t\u00far~d\u00e1\u00fd".split(" "),weekdaysShort:"S~\u00fa\u00f1 ~M\u00f3\u00f1 ~T\u00fa\u00e9 ~W\u00e9d ~Th\u00fa ~Fr\u00ed ~S\u00e1t".split(" "),
weekdaysMin:"S~\u00fa M\u00f3~ T\u00fa ~W\u00e9 T~h Fr~ S\u00e1".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~\u00f3d\u00e1~\u00fd \u00e1t] LT",nextDay:"[T~\u00f3m\u00f3~rr\u00f3~w \u00e1t] LT",nextWeek:"dddd [\u00e1t] LT",lastDay:"[\u00dd~\u00e9st~\u00e9rd\u00e1~\u00fd \u00e1t] LT",lastWeek:"[L~\u00e1st] dddd [\u00e1t] LT",sameElse:"L"},relativeTime:{future:"\u00ed~\u00f1 %s",
past:"%s \u00e1~g\u00f3",s:"\u00e1 ~f\u00e9w ~s\u00e9c\u00f3~\u00f1ds",ss:"%d s~\u00e9c\u00f3\u00f1~ds",m:"\u00e1 ~m\u00ed\u00f1~\u00fat\u00e9",mm:"%d m~\u00ed\u00f1\u00fa~t\u00e9s",h:"\u00e1~\u00f1 h\u00f3~\u00far",hh:"%d h~\u00f3\u00fars",d:"\u00e1 ~d\u00e1\u00fd",dd:"%d d~\u00e1\u00fds",M:"\u00e1 ~m\u00f3\u00f1~th",MM:"%d m~\u00f3\u00f1t~hs",y:"\u00e1 ~\u00fd\u00e9\u00e1r",yy:"%d \u00fd~\u00e9\u00e1rs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(b){var a=b%10;return b+(1===
~~(b%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}})});
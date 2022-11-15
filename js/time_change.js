$(document).ready(function(){
    let date1 = new Date();
    let year = date1.getFullYear();
    let hours = 12;
    let month = date1.getMonth();
    let date = date1.getDate();
    let date2 = new Date(year,month,date,hours);

    // before 12:00
    if(date1 < date2){
     $('.click').addClass("before1");
     $('.click').removeClass("after1");
     $('body').addClass("before2");
     $('body').removeClass("after2");
    }
    // after before 12:00
    else{
     $('.click').addClass("after1");
     $('.click').removeClass("before1");
     $('body').addClass("after2");
     $('body').removeClass("before2");
    }
});

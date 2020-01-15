//////Weather api///////////////////////
function getWeather(){
  $('.weatherResponseImg').html('');
  $('.weatherResponseData').html('');
  $('.weatherDeg').html('');
  $('.weatherDescription').html('');
  $('.windSpeed').html('');
  $('.clouds').html('');
  $('.humidity').html('');


   let cityName = $('#cityName').val();
   let apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=675ac08300204477b6dc6a24be5f37c0';

   $.getJSON (apiCall, weatherCallback);

   function weatherCallback(weatherData) {
     let cityName = weatherData.name + ', ';
     let country = weatherData.sys.country;
     let description = weatherData.weather[0].description;
     let weatherImg =  '<img src = "https://openweathermap.org/img/w/'+weatherData.weather[0].icon +'.png">';
     let weatherDeg = Math.round(weatherData.main.temp-273) + '&deg;';
     let windSpeed = weatherData.wind.speed + 'm/s';
     let clouds = weatherData.clouds.all + 'mm/h';
     let humidity = weatherData.main.humidity + 'mp/h';
     $('.weatherResponseImg').append(weatherImg);
     // $('.weatherResponseImg').css("background-image", weatherImg);
     $('.weatherResponseData').append(cityName , country);
     $('.weatherDeg').append(weatherDeg);
     $('.weatherDescription').append(description);
     $('.clouds').append(clouds);
     $('.humidity').append(humidity);
     $('.windSpeed').append(windSpeed);

   }
}
//////////////////////////FAQ/////////////////////////////////
$('.faqItemTitleInner').on('click',function(){
        $(this).parents('.faqItem').find('.faqItemBody').slideToggle(300);
        $(this).toggleClass('open');
        if ($(this).hasClass('show_all')){
                if ($(this).hasClass('open')) {
                    $(this).html('');
                $('.faq_item_title_inner:not(.open)').trigger('click');


            } else {
                $(this).html();
                $('.faqItemTitleInner.open').trigger('click');
            }
        }
    });
    $(".faqItem").bind("click", function () {
        $(this).css("background", "none");
        $(this).css("background", "linear-gradient(to right, #4114b8 0%,#210594 100%, #210594 100%)");
    });


////////////////////////move photo/////////////////
    $(document).ready(function(){
  let mouseX, mouseY;
  let ww = $( window ).width();
  let wh = $( window ).height();
  let traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + -10;
    traY = ((4 * mouseY) / 570) + -20;
    $(".comprehenesiveImg").css({"background-position": traX + "%" + traY + "%"});
  });
});
$(".faqItem").bind("click", function () {
    $(this).css("background", "none");
    $(this).css("background", "linear-gradient(to right, #4114b8 0%,#210594 100%, #210594 100%)");
});

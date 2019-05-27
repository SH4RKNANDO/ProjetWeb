/*###################### < Initialize Document >####################### */

/*#########################
  # < Globals Variables > #
  ######################### */
var slideIndex = 1;
var carouselTimeout = "";
var no =0;
var fill1= "";
var fill2= "";
var fill3= "";
var SlideChanged=  0;

$(document).ready(function () {

    /* SideBar Tablet and Desktop*/
    document.getElementById('CloseBtn').addEventListener('click', closeNav);
    document.getElementById('OpenBtn').addEventListener('click', openNav);

    /*# < Focus Contact  >  #*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() !== "") { $(this).addClass('has-val'); }
            else { $(this).removeClass('has-val'); }
        })
    });

    /* # < Validate Infos  > #*/
    $('.validate-form').on('submit',function(){
        let input = $('.validate-input .input100');
        let check = true;

        for(let i=0; i<input.length; i++) {
            if(validate(input[i]) === false){
                showValidate(input[i]);
                check=false;
            }
        }
        return check;
    });
    $('.validate-form .input100').each(function() {
        $(this).focus(function(){ hideValidate(this); });
    });

    /*# < Show and Hidde Form > # */
    $('.contact100-btn-hide').on('click', function() { $('.wrap-contact100').fadeOut(400); });
    $('.contact100-btn-show').on('click', function() { $('.wrap-contact100').fadeIn(400); });

    hiddecontent();

    /* Scroll Events */
    showSlides(1);
    counter();
    map();
});

/* #####################
   # < Hidde Content > #
   ##################### */

function hiddecontent() {
    $('.panel').css({
        visibility: 'hidden',
        paddingTop: '0px',
        paddingBottom: '0px',
        height: '0px'
    });

    $("#CircularMenu").fadeOut(0);
    $("#CircularMenu2").fadeOut(0);
    $('.content').fadeOut(0);
}

/*###################### < Mobile Animation  >####################### */

function RemoveMobileActive() {
    $('.mobilea').removeClass('active').addClass('activenone');
}

function clickMobile(x) {
    RemoveMobileActive();
    CloseCircularTab();
    x.classList.remove('activenone');
    x.classList.add('active');

    if (x.id === "MHard") {
        if (document.getElementById('CircularMenu').style.display === 'none') {
            OpencircularTab(x, 1);
        } else {
            CloseCircularTab();
        }
    } else if (x.id === "MContact") {
        if (document.getElementById('CircularMenu2').style.display === 'none') {
            OpencircularTab(x, 2);
        } else {
            CloseCircularTab();
        }
    }
}

function OpencircularTab(x, number) {

    if (number === 1) {
        let circleMenu = document.getElementsByClassName('menu-item');
        let trans = "";

        $("#CircularMenu").fadeIn(400);

        for (let i = 0; i < circleMenu.length; i++) {
            switch (i) {
                case 0:
                    trans = "rotate(-35deg) translateY(-66px) rotate(36deg)";
                    break;
                case 1:
                    trans = "rotate(-8deg) translateY(-77px) rotate(10deg)";
                    break;
                case 2:
                    trans = "rotate(16deg) translateY(-78px) rotate(-12deg)";
                    break;
                case 3:
                    trans = "rotate(36deg) translateY(-79px) rotate(-27deg)";
                    break;
                case 4:
                    trans = "rotate(52deg) translateY(-73px) rotate(-47deg)";
                    break;
            }

            $(this).delay(500).animate(900, function () {
                circleMenu[i].style.transform = trans;
            });
        }
    } else if (number === 2) {
        let circleMenu2 = document.getElementsByClassName('menu-item2');
        let trans = "";

        $("#CircularMenu2").fadeIn(400);

        for (let i = 0; i < circleMenu2.length; i++) {
            switch (i) {
                case 0:
                    trans = "rotate(-35deg) translateY(-71px) rotate(38deg)";
                    break;
                case 1:
                    trans = "rotate(-8deg) translateY(-77px) rotate(10deg)";
                    break;
                case 2:
                    trans = "rotate(16deg) translateY(-78px) rotate(-12deg)";
                    break;
                case 3:
                    trans = "rotate(36deg) translateY(-79px) rotate(-27deg)";
                    break;
                case 4:
                    trans = "rotate(52deg) translateY(-73px) rotate(-47deg)";
                    break;
            }
            $(this).delay(500).animate(900, function () {
                circleMenu2[i].style.transform = trans;
            });
        }
    }
}

function CloseCircularTab() {

    var circleMenu = document.getElementsByClassName('menu-item');
    var circleMenu2 = document.getElementsByClassName('menu-item2');

    for (let i = 0; i < circleMenu.length; i++) {
        $(this).delay(500).animate(900, function () {
            circleMenu[i].style.transform = "translate(0px, 0px)";
        });
    }
    for (let i = 0; i < circleMenu2.length; i++) {
        $(this).delay(500).animate(900, function () {
            circleMenu2[i].style.transform = "translate(0px, 0px)";
        });
    }

    $('#CircularMenu').fadeOut(400);
    $('#CircularMenu2').fadeOut(400);
}

/* ##################### < Sidebar Animation  > ###################### */

function openNav() {
    $('#ContactContent').animate({ marginLeft: '13vw' }, 500);
    $('#SideBarOpen').delay(300).animate({ width: '230px' }, 500);
    $('.content').delay(600).fadeIn(500);
}

function closeNav() {
    $('.content').fadeOut(500);
    $('#SideBarOpen').delay(300).animate({ width: '0px' }, 500);
    $('#ContactContent').delay(700).animate({ marginLeft: '8vw' }, 500);
}

/* ##################### < Sliders Animations  > ###################### */

// Next/previous controls
function plusSlides(n) {
    if(SlideChanged === 0) {
        SlideChanged = 1;
        showSlides(slideIndex += n);
        setTimeout(function() { SlideChanged = 0; }, 1000);
    }
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    /* Reset Index */
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    /* Reset Slider Content */
    $('.mySlides').fadeOut(500);
    $('.dot').removeClass('active');

    /* */
    $(slides[slideIndex-1]).delay(500).fadeIn('500');

   /* slides[slideIndex-1].style.display = "block"; */
    dots[slideIndex-1].className += " active";
}

function carousel() {
    plusSlides(1);
    carouselTimeout = setTimeout(carousel, 5000); // Change image every 5 seconds
}

function BtnPlay(x) {
    if(x.classList.contains('play-btn')) {
        x.classList.add('pause-btn');
        x.classList.remove('play-btn');
        carousel();
    } else
    {
        x.classList.add('play-btn');
        x.classList.remove('pause-btn');
        clearTimeout(carouselTimeout);
    }

}

/* ##################### < Contact Animations  > ###################### */

function validate (input) {
    if($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
        if($(input).val().trim().match(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(]?)$/) == null) {
            return false;
        }
    }
    else { if($(input).val().trim() === '') { return false; } }
}

function showValidate(input) {
    let thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
    let thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
}

function map() {
    let selector_map = $('#google_map');
    let img_pin = selector_map.attr('data-pin');
    let data_map_x = selector_map.attr('data-map-x');
    let data_map_y = selector_map.attr('data-map-y');
    let scrollwhell = selector_map.attr('data-scrollwhell');
    let draggable = selector_map.attr('data-draggable');

    if (img_pin == null) { img_pin = 'images/icons/location.png'; }
    if (data_map_x == null || data_map_y == null) {
        data_map_x = 50.4524031;
        data_map_y = 4.1410165;
    }
    if (scrollwhell == null) { scrollwhell = 0; }

    if (draggable == null) { draggable = 0; }

    let style = [
        {
            "featureType": "all",  "elementType": "labels.text.fill",
            "stylers": [ { "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 } ] },
        {
            "featureType": "all",  "elementType": "labels.text.stroke",
            "stylers": [ { "visibility": "on" }, { "color": "#000000"}, {"lightness": 16} ] },
        {
            "featureType": "all", "elementType": "labels.icon",
            "stylers": [ { "visibility": "off" } ]},
        {
            "featureType": "administrative", "elementType": "geometry.fill",
            "stylers": [ { "color": "#000000" }, { "lightness": 20} ]},
        {
            "featureType": "administrative", "elementType": "geometry.stroke",
            "stylers": [ { "color": "#000000" },  { "lightness": 17 },  { "weight": 1.2 } ]},
        {
            "featureType": "landscape", "elementType": "geometry",
            "stylers": [ { "color": "#000000" },  { "lightness": 20 } ] },
        {
            "featureType": "poi", "elementType": "geometry",
            "stylers": [ { "color": "#000000" }, { "lightness": 21} ] },
        {
            "featureType": "road.highway", "elementType": "geometry.fill",
            "stylers": [ { "color": "#000000" },  { "lightness": 17} ] },
        {
            "featureType": "road.highway", "elementType": "geometry.stroke",
            "stylers": [ { "color": "#000000" },  { "lightness": 29 },  { "weight": 0.2 } ] },
        {
            "featureType": "road.arterial", "elementType": "geometry",
            "stylers": [ { "color": "#000000" }, { "lightness": 18 } ] },
        {
            "featureType": "road.local", "elementType": "geometry",
            "stylers": [ { "color": "#000000" }, { "lightness": 16 } ] },
        {
            "featureType": "transit", "elementType": "geometry",
            "stylers": [ { "color": "#000000" }, { "lightness": 19 } ] },
        {   "featureType": "water",
            "elementType": "geometry",
            "stylers": [ { "color": "#000000" }, { "lightness": 17 } ]}
    ];

    let latitude = data_map_x,
        longitude = data_map_y,
        map_zoom = 14;

    let locations = [
        ['Welcome', latitude, longitude, 2]
    ];

    if (selector_map !== undefined) {
        var map = new google.maps.Map(document.getElementById('google_map'), {
            zoom: 13,
            scrollwheel: false,
            zoomControl: false,
            disableDoubleClickZoom: true,
            navigationControl: true,
            mapTypeControl: false,
            scaleControl: false,
            draggable: draggable,
            styles: style,
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: img_pin
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

/* ##################### < Counter Langue > ##################### */

function counter() {
    var counter = document.getElementById('counter_fr').getContext('2d');
    var nbmax = 80;
    fill = setInterval(fillCounter, 50, counter, nbmax);

    var counter = document.getElementById('counter_nl').getContext('2d');
    var nbmax = 35;
    fill2 = setInterval(fillCounter, 50, counter, nbmax);

    var counter = document.getElementById('counter_en').getContext('2d');
    var nbmax = 50;
    fill3 = setInterval(fillCounter, 50, counter, nbmax);
}

function fillCounter(counter, nbmax) {
    let pointToFill = 4.72;
    let diff = ((no / 100) * Math.PI * 2 * 10);

    counter.clearRect(0, 0, counter.canvas.width, counter.canvas.height);
    counter.lineWidth = 10;
    counter.fillStyle = 'black';
    counter.strokeStyle = 'rgba(0, 0, 0, .5)';
    counter.textAlign = 'center';
    counter.font = "25px monospace";
    counter.fillText(no + '%', 100, 110);
    counter.beginPath();
    counter.arc(100, 100, 90, pointToFill, diff / 10 + pointToFill); //arc(x,y,radius,start,stop)
    counter.stroke();

    // delete des Timeout
    if (no >= nbmax) {
        if (nbmax === 35) { clearTimeout(fill2); }
        if (nbmax === 50) { clearTimeout(fill3); }
        if (nbmax === 80) { clearTimeout(fill); }
    }
    no++;
}


const title = document.getElementsByClassName('tabs-title');

for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function () {
        if (!(this.classList.contains('active'))) {
            for (let i = 0; i < title.length; i++) {
                title[i].classList.remove('active');
            }
            this.classList.add('active');
        }

        const tabsContent = document.querySelectorAll('.tabs-content');
        const contentId = this.dataset.id;
        const content = document.getElementById(contentId);
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.remove('active');
        }
        if (content) {
            tabsContent[i].classList.add('active');
        }
    });
}

    // Ховер блок через координаты
    function blockPosition(anchor, elem) {
        let anchorCoords = anchor.getBoundingClientRect();
        elem.style.left = anchorCoords.left + 'px';
        elem.style.top = anchorCoords.top + document.documentElement.scrollTop + 'px';
        elem.style.display = 'inline-block';
    }

    const hoverBlock = document.querySelector('.hover-block');
    const imgForChange = document.querySelector('.tabs-images');
    imgForChange.addEventListener('mouseover', function (event) {
        let target = event.target;
        blockPosition(target, hoverBlock);
    });
        hoverBlock.addEventListener('mouseover', function () {
            this.style.display = 'block'
        });
        hoverBlock.addEventListener('mouseout', function () {
        this.style.display = 'none'
});

// Ховер-блок через js
//     const hoverBlock = document.querySelector('.hover-block');
//     const imgForChange = document.querySelector('.tabs-images');
//     imgForChange.addEventListener('mouseover', function (event) {
//         let target = event.target;
//         hoverBlock.style.display = 'inline-block';
//         target.replaceWith(hoverBlock);
//     });
//     imgForChange.addEventListener('mouseout', function (event) {
//         let target = event.target;
//         hoverBlock.replaceWith(target);
//     });
// Ховер-блок end

    $(document).ready(function () {
        $('.products').click(function () {
            if (!$(this).hasClass('active')) {
                let contentId = $(this).attr('id');

                $('.products.active').removeClass('active');
                $('.on-hover').hide();

                $(this).addClass('active');
                $('.on-hover[data-img=' + contentId + ']').show();
                $('.our-work-loading').show();
            }
        });

        $('.products.first-tabs').click(function () {
            $('.on-hover').show();
            $('.on-hover.hidden').hide();
            $('[data-img=all]').hide();

        });
    });


const graphicDesign = [
    'graphic%20design/graphic-design1.jpg',
    'graphic%20design/graphic-design2.jpg',
    'graphic%20design/graphic-design3.jpg',
    'graphic%20design/graphic-design4.jpg',
    'graphic%20design/graphic-design5.jpg',
    'graphic%20design/graphic-design6.jpg',
    'graphic%20design/graphic-design7.jpg',
    'graphic%20design/graphic-design8.jpg',
    'graphic%20design/graphic-design9.jpg',
    'graphic%20design/graphic-design10.jpg',
    'graphic%20design/graphic-design11.jpg',
    'graphic%20design/graphic-design12.jpg'
];
const webDesign = [
    'web%20design/web-design1.jpg',
    'web%20design/web-design2.jpg',
    'web%20design/web-design3.jpg',
    'web%20design/web-design4.jpg',
    'web%20design/web-design5.jpg',
    'web%20design/web-design6.jpg',
    'web%20design/web-design7.jpg',
];
const wordpress = [
    'wordpress/wordpress1.jpg',
    'wordpress/wordpress2.jpg',
    'wordpress/wordpress3.jpg',
    'wordpress/wordpress4.jpg',
    'wordpress/wordpress5.jpg',
    'wordpress/wordpress6.jpg',
    'wordpress/wordpress7.jpg',
    'wordpress/wordpress8.jpg',
    'wordpress/wordpress9.jpg',
    'wordpress/wordpress10.jpg',
];
const landingPage = [
    'landing%20page/landing-page1.jpg',
    'landing%20page/landing-page2.jpg',
    'landing%20page/landing-page3.jpg',
    'landing%20page/landing-page4.jpg',
    'landing%20page/landing-page5.jpg',
    'landing%20page/landing-page6.jpg',
    'landing%20page/landing-page7.jpg',
];
const allImg = [
    'graphic%20design/graphic-design1.jpg',
    'graphic%20design/graphic-design2.jpg',
    'graphic%20design/graphic-design3.jpg',
    'graphic%20design/graphic-design4.jpg',
    'graphic%20design/graphic-design5.jpg',
    'landing%20page/landing-page1.jpg',
    'landing%20page/landing-page2.jpg',
    'landing%20page/landing-page3.jpg',
    'wordpress/wordpress7.jpg',
    'wordpress/wordpress8.jpg',
    'wordpress/wordpress9.jpg',
    'wordpress/wordpress10.jpg',
];

function addImage (arr,data){
    let array = arr.map(function(elem,i,arr){
        return `<img src="${elem}" alt='img' class='on-hover' data-img="${data}">`
    });
    array = array.join('');
    $('.tabs-images').append(array)
}
$('.our-work-loading').click(function (e){
    e.preventDefault();
    let imageData = $('.products.active').attr('id');
    switch (imageData) {
        case 'graphic-design':
            addImage(graphicDesign,'graphic-design');
            $(this).hide();
            break;
        case 'web-design':
            addImage(webDesign,'web-design');
            $(this).hide();
            break;
        case 'landing-page':
            addImage(landingPage,'landing-page');
            $(this).hide();
            break;
        case 'wordpress':
            addImage(wordpress,'wordpress');
            $(this).hide();
            break;
        case 'all':
            $('.on-hover.hidden').show();
            $('.our-work-loading').click(function () {
                addImage(allImg,'all');
                    $(this).hide('slow');
            });
            break;
    }
});



$(document).ready(function () {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
    });

$('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 17,
    fitWidth: true
});

$('.append-button').on( 'click', function() {
    // create new item elements
    let $item1 = $('<div class="grid-item"><img src="Image/mnsry-spain.png" alt="img"></div>');
    let $item2 = $('<div class="grid-item"><img src="Image/mnsry-usa.png" alt="img"></div>');
    let $item3 = $('<div class="grid-item grid-item--width3"><img src="Image/latest-post-1-img.png" alt="img"> <img src="Image/latest-post-2-img.png" alt="img"> <img src="Image/latest-post-4-img.png" alt="img"> <img src="Image/latest-post-5-img.png" alt="img"> <img src="Image/latest-post-6-img.png" alt="img"> <img src="Image/latest-post-7-img.png" alt="img"> <img src="Image/latest-post-1-img.png" alt="img"> <img src="Image/latest-post-2-img.png" alt="img"> <img src="Image/latest-post-4-img.png" alt="img"> </div>');
    let $item4 = $('<div class="grid-item"><img src="Image/mnsry-post-4-img.png" alt="img"></div>');
    let $item5 = $('<div class="grid-item"><img src="Image/mnsry-spain.png" alt="img"></div>');
    let $item6 = $('<div class="grid-item grid-item--width2"> <img src="Image/mnsry-post-3-img.png" alt="img"><img src="Image/latest-post-1-img.png" alt="img"> </div>');
    let $item7 = $('<div class="grid-item"><img src="Image/mnsry-canada.png" alt="img"></div>');
    let $item8 = $('<div class="grid-item"><img src="Image/mnsry-france.png" alt="img"></div>');

    $('.grid').append($item1).masonry('appended', $item1);
    $('.grid').append($item2).masonry('appended', $item2);
    $('.grid').append($item3).masonry('appended', $item3);
    $('.grid').append($item4).masonry('appended', $item4);
    $('.grid').append($item5).masonry('appended', $item5);
    $('.grid').append($item6).masonry('appended', $item6);
    $('.grid').append($item7).masonry('appended', $item7);
    $('.grid').append($item8).masonry('appended', $item8);

});

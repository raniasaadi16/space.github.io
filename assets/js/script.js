if(document.querySelector('.my-rating')){
    $(".my-rating").starRating({
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 25,
        readOnly: true,
    });
}
if(document.querySelector('.rating')){
    $(".rating").starRating({
        strokeColor: '#000',
        strokeWidth: 10,
        starSize: 15,
        readOnly: true,
        starGradient: '#000'
    });
}
if (document.querySelector(".owl-carousel3")) {
    $('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            786: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
                dots:true
            }
        }
    })
}
if (document.querySelector(".owl-carousel2")) {
    $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        //autoplayTimeout: 100,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            786: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: false,
                loop: false,
            }
        }
    })
}

if(document.querySelector('#thumb')){
    const thumbs = document.querySelectorAll('#thumb')
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            document.querySelector('.carousel-ov.active').classList.remove('active')
            thumb.classList.add('active')
        document.querySelector('#displayImg').setAttribute('src', thumb.getAttribute('src'))
        })

    })
}

if(document.querySelector('#content')){
    let width = screen.width;
    let item;
    if(width > 786){
        item = 6
    }else{
        item = 3
    }
    var flexiblePagination = $('#content').flexiblePagination({

        // Selectors
        pagingControlsContainer: "#pagingControls",
        pagingContainer: "#content",
    
        // How many items to display per page
        itemsPerPage: item,
    
        // Current page
        currentPage: 1,
    })
}
// $(function() {
//     $('.toggles button').click(function() {
//         var getId = this.id;
//         var getCurrent = $('.posts .' + getId); //!! пробел и точка!!

//         $('.post').not(getCurrent).hide(500);
//         getCurrent.show(500);
//     });

//     $('#showall').click(function() {
//         $('.post').show(500);
//     });
// });




// const selectPosts = document.querySelectorAll('.control_grop');
// const selectAllPost = document.querySelector('#showall');
const post = document.querySelectorAll('.post');

function show(item) {
    // item.style.transition = 'all 500ms';
    item.style.display = 'block';
    item.style.height = '100%';
}

function hide(item) {
    // item.style.transition = 'all 500ms';
    item.style.display = 'none';
    item.style.height = '0';
}

document.querySelectorAll('.control_grop').forEach(elem => {
    elem.onclick = function() {
        const getIdClass = this.id;
        post.forEach(element => {
            if (element.classList.contains(getIdClass)) {
                show(element);
            } else {
                hide(element);
            }
        });
    }
});

document.querySelector('#showall').onclick = function() {
    post.forEach(item => {
        show(item);
    });
}

// for (let i = 0; i < selectPosts.length; i++) {
//     selectPosts[i].onclick = function() {
//         const getIdClass = this.id;
//         for (let j = 0; j < post.length; j++) {
//             if (!post[j].classList.contains(getIdClass)) {
//                 hide(post[j]);
//             } else {
//                 show(post[j]);
//             }
//         }
//     }
// }

// selectAllPost.onclick = function() {
//     for (let i = 0; i < post.length; i++) {
//         show(post[i]);
//     }
// };

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 8,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true
    });

});

if ($(window).width() < 420) {
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000
    });
}
const header = document.getElementById('header');
const title = document.getElementById('title');
const exerpt = document.getElementById('exerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// setTimeout(getData, 2500);
// This is modified to take the time to load the image instead of a fixed time
const img = new Image();
img.src = 'https://source.unsplash.com/random/?building,arcitecture';
img.onload = function() {
    setTimeout(getData, 0);
}
//

function getData() {
    header.innerHTML = '<img src="' + img.src+ '" alt="random architecture"/>';
    
    title.innerHTML = 'कारन जिम्मे पासपाई बिन्दुओमे';
    exerpt.innerHTML = 'कराना पढाए ढांचा नयेलिए प्रव्रुति अन्तरराष्ट्रीयकरन सुचना लेने मानसिक व्याख्यान विभाग और ४५० दोषसके निरपेक्ष होगा विभाग संस्था अंग्रेजी हीकम एसलिये विभाजन लिए।';
    
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/19.jpg" alt="Random Human Male"/>'
    name.innerHTML = 'चमन चोमू';
    date.innerHTML = 'Oct १४, २००४';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(tbg => tbg.classList.remove('animated-bg-text'));
}
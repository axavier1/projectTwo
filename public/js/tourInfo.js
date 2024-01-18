

// next slide function
const slides = document.querySelectorAll('.slide');
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
});

let curSlide = 0;
let maxSlide = slides.length - 1;
const nextSlide = () => {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    // console.log(curSlide)
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
    });
}

document.querySelector('.btn-next').addEventListener('click', nextSlide);

// previous slide function

const prevSlide = () => {
    (curSlide === 0) ? curSlide = maxSlide : curSlide--;
    // console.log(curSlide);
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
}

document.querySelector('.btn-prev').addEventListener('click', prevSlide);


// function for click to sign to tour 

const addMember = async (event) => {
    event.preventDefault();
    const id = document.querySelector('.add-user').getAttribute('id');
    // console.log(id);
    if (id) {
        const response = await fetch('/api/members/', {
            method: "POST",
            body: JSON.stringify({ id }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            // console.log('new account')
            document.location.reload();

        } else {
            // document.location.reload();
            alert(response.statusText);
        }
    }
};

document.querySelector('.add-user').addEventListener('click', addMember);

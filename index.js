let sectionBtn = document.querySelectorAll('.icon')
let sectionBtns = document.querySelectorAll('.icons');
let sections = document.querySelectorAll('section');


// let body = document.body; // returns the body tags and the one's nested in it
let body = document.querySelector('.main-body'); // return ONLY the body tag
// NOTE : its NOT querySelectorAll BUT querySelector

// Create a <link> element to import the CSS file
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = './pageMedia.css'; // Replace with your CSS file path

// Append the <link> element to the <head> of the document
document.head.appendChild(linkElement);


// console.log(body)

function PageBtn() {
    // for (let i = 0; i < sectionBtn.length; i++) {
    //     sectionBtn[i].addEventListener('click', function () {
    //         let currentBtn = document.querySelectorAll(".active-btn");
    //         currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
    //         this.className += ' active-btn';
    //     })
    // }
    sectionBtn.forEach(btn => btn.addEventListener('click', () => {
        let currentBtn = document.querySelectorAll(".active-btn");
        currentBtn[0].classList.remove('active-btn')
        btn.classList.add('active-btn');
        // currentBtn[0].className = currentBtn[0].className.replace(" active-btn", "");
        // btn.className += ' active-btn';
    }))

    body.addEventListener('click', (e) => {
        // console.log(e.target.tagName); // I
        let clickedElement = e.target;

        // Check if the clicked element is an <i> tag
        if (clickedElement.tagName == 'I') {
            // If it's an <i> tag, access its parent node (the <div> containing the icon)
            clickedElement = clickedElement.parentNode;
        }
        // console.log(clickedElement)
        // console.log(clickedElement.dataset.id)
        let dataid = clickedElement.dataset.id;
        // console.log(dataid);

        //add active-sec to both icons and sections
        // can't use this because the button with active-sec becomes display-block but we need the icons to be in flex. EXCEPT // if it is 'main .active-sec {}'(css) only will the below code work 
        if (dataid) {
            sectionBtn.forEach((btn) => {
                btn.classList.remove("active-sec");
            })
            clickedElement.classList.add('active-sec');

            sections.forEach((sec) => {
                sec.classList.remove('active-sec');
            })
            const ele = document.getElementById(dataid);
            ele.classList.add('active-sec');
        }

        //add active-sec only to sections
        // if (dataid) {
        //     sections.forEach((sec) => {
        //         if (sec.id == dataid) {
        //             sec.classList.add('active-sec')
        //         } else {
        //             sec.classList.remove('active-sec');
        //         }
        //     })
        // }

    })

    // Toggle theme
    let themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageBtn();

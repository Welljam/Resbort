const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenimgY = document.querySelectorAll('.hiddenY');
hiddenimgY.forEach((el) => observer.observe(el));

const hiddenRight = document.querySelectorAll('.hiddenRight');
hiddenRight.forEach((el) => observer.observe(el));

const hiddenLeft = document.querySelectorAll('.hiddenLeft');
hiddenLeft.forEach((el) => observer.observe(el));

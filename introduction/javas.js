const cols = document.querySelectorAll("div.faade, .arro");

const obser = new IntersectionObserver((entries) => {
   entries.forEach(entry=> {
    if(entry.isIntersecting) {
        entry.target.classList.add("vis");
        console.log(entry);

    }
    else {
        entry.target.classList.remove("vis");
        console.log(entry);
    }
   })
}, 
{
    threshold: .3
})
cols.forEach(elms=>obser.observe(elms));
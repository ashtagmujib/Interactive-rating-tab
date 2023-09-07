const rate = document.getElementById('rate');
const submit = document.getElementById('submit');
const rateBtn = Array.from(document.querySelectorAll('#rateBtn'));

const rating = document.querySelector('.rating');
const Thanks = document.querySelector('.thankYou');
const rateSelection = document.getElementById('rateSelection');

rateBtn.forEach((rateCount) => {
    rateCount.addEventListener('click', ()=> {
        rateCount.classList.toggle('active');

        

        submit.addEventListener('click', () =>  {

            if(rateCount.classList.contains('active')) {
                rating.style.display = 'none';
                Thanks.style.display = 'block';
            
                rateSelection.innerText = `You selected ${rateCount.innerText} out of 5`;
                rateSelection.style.color = 'hsl(25, 97%, 53%)';
            
            }

        })
    })
})









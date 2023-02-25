const loadPhones = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    // console.log(data.data);
    displayPhones(data.data);

}

const displayPhones = phones => {
    console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHtml = `
        <h1>it is ok</h1>
        
        `;

        phonesContainer.appendChild(phoneDiv);


    })
}

loadPhones();
// displayPhones();



/**
 * // <div class="card-body p-4">
        //       <img src="${phone.image}" >
        //       <h5 class="card-title">${phone.phone_name}</h5>
        //       <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        // </div>
 */
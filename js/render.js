var container = document.getElementById('donorInfo');
function render(event) {
    // event.preventDefault();
    for (i = 0; i < donorsArray.length; i++) {


        var instanceDonor = donorsArray[i];

        var li = document.createElement('li');

        container.appendChild(li);
        li.textContent = instanceDonor.name +  ", blood type is " + instanceDonor.bloodType +  'from ' + instanceDonor.location+'   email address: '+instanceDonor.email;

    }

}

var rendClick = document.getElementById('clickId')
console.log('rendClick : ', rendClick);

// rendClick.addEventListener('click',render)

render();
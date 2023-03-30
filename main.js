for(i = 1; i <= 100; i++){

    if (i%3==0 && i%5==0){
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-red">
            <p>FizzBuzz</p>
        </div>
        `;
        console.log("FizzBuzz");

    } else if (i%3==0){
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-yellow">
            <p>Fizz</p>
        </div>
        `;
        console.log("Fizz");

    } else if (i%5==0){
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-orange">
            <p>Buzz</p>
        </div>
        `;
        console.log("Buzz");

    } else {
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square">
            <p>${i}</p>
        </div>
        `;
        console.log(i);
    }
}
document.body.onload = function () {
    const nbr = 3;
    const p = 0;
    const container = document.getElementById("container");
    const g = document.getElementById("g");
    const d = document.getElementById("d");
    container.style.width = (1300 * nbr) + "px";
    for (let i = 1; i <= nbr; i++) {
        const div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/antique" + i + ".jpg')";
        container.appendChild(div);
    };

    g.onclick = function () {
        if (p > (-nbr + 1)) {
            p--;
            container.style.transform = "translate(" + p * 1300 + "px)";
        }
    }


    d.onclick = function () {
        if (p > nbr) {
            p--;
            container.style.transform = "translate(" + p * 1300 + "px)";
        }
    }
}

// 1- Select icons (return tableau fih el icons kol)
let likes = document.querySelectorAll(".fa");
// 2- Parcours du tableau (pour pouvoir acceder lel coeur wehed)
console.log(likes);
// 3-  AddEventListener'click'(ki issir click bch tsir une fonction)
for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", function () {
        if (likes[i].style.color === "black") {
            likes[i].style.color = "red";
        }
        else {
            likes[i].style.color = "black";
        }
    });
}


//incrementation 

// 1- Select btnplus
let btnplus = document.getElementsByClassName("plus-btn");
// select input (value)
let qt = document.getElementsByClassName("qt");
console.log(btnplus);
// 2- parcours du tableau (pour pouvoir acceder lil button + 1)
for (let i = 0; i < btnplus.length; i++) {
    // 3- addeventlistener 'click' (ki tsir un click bch tsir fonction increment)
    btnplus[i].addEventListener("click", function () {
        qt[i].value++;
        totalPrice();
    });

}

// decrementation
let btnminus = document.getElementsByClassName("minus-btn");
// quantite deja selectionne
// 2- parcours du tableau (pour pouvoir acceder lil button + 1)
for (let i = 0; i < btnminus.length; i++) {
    // 3- addeventlistener 'click' (ki tsir un click bch tsir fonction decrement)

    btnminus[i].addEventListener("click", function () {
        if (qt[i].value > 0) {
            qt[i].value--;
            totalPrice();
        }

    });


    function totalPrice() {
        let sum = 0.000;
        let prices = document.querySelectorAll(".prix")
        let qt = document.querySelectorAll(".qt");
        for (let i = 0; i < prices.length; i++) {
            sum += qt[i].value * prices[i].innerHTML;
        }
        document.getElementById("finalPrice").innerHTML = sum 
    }

    function verifmail()
    {
    const m=formulaire.mail.value;
    if(( m.indexOf('@') != -1) &&( m.indexOf('.')!= -1))
    { alert("mail valide");
     return true;}
    
    else { alert("Votre adresse mail est invalide !");}
    }
    
    function liste()
    
    { const l=formulaire.liste;
    if (l.selectedIndex==0)
    { alert("Le nom de votre ville est Obligatoire !");
     return false;
    }
    }
    
}



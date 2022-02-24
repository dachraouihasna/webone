var g = document.getElementById("g");
var d = document.getElementById("d");
var nbr = 3;
var p = 0;
document.body.onload = function () {
    const container = document.getElementById("container");
    container.style.width = (1300 * nbr) + "px";
    for (let i = 1; i <= nbr; i++) {
        const div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/antique" + i + ".jpg')";
        container.appendChild(div);
    };

    g.onclick = function () {
        if (p > -nbr + 1) {

            p--;
            container.style.transform = "translate(" + p * 1300 + "px)";
        }
    }


    d.onclick = function () {
        if (p < nbr) {
            p++;
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


}



document.getElementById("confmail").addEventListener("input", function () {
    var pErreur = document.getElementById("erreur");
    if (this.value != document.getElementById("mail").value) {
        pErreur.innerHTML = "Les deux adresses mail ne correpondent pas !"
    } else {
        pErreur.innerHTML = "";
    }
});

function verifmail() {
    const mail = contact.mail.value;
    if ((mail.indexOf('@') != -1) && (mail.indexOf('.') != -1)) {
        alert("votre adresse mail est validée ");
        return true;
    }

    else { alert("Votre adresse mail est invalide !"); }
}

document.getElementById("formulaire").addEventListener("submit", function (e) {
    e.preventDefault();
    var erreur;

    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez remplir tous les champs"
        }
    };

    if (erreur) {
        e.preventDefault()
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {

        alert('Commande enregistrée !');
    }
});






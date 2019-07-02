function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}


var HP = 100;
var mesHP = 15;
var viveattaque = entierAleatoire(5, 10);
var tranche = entierAleatoire(10, 15);
var poudre = entierAleatoire(15, 20);
var lance = entierAleatoire(20, 25);
var potion = 10;
var superpotion = 25;
var hyperpotion = 50;
var ultrapotion = 100;

// bouton de retour 


function retour() {
    document.getElementById('attaque').innerHTML ='attaque';
    document.getElementById('pokemon').innerHTML = 'pokemon';
    document.getElementById('sac').innerHTML = 'sac';
    document.getElementById('fuite').innerHTML = 'fuite';
    document.getElementById('dialoguecote').innerHTML = ' que voulez vous faire a present ?';
}




// l'action des boutons en fonction de ce qu'il est ecrit 


// bouton haut gauche //
function btnhg() {
    
 if (document.getElementById('attaque').innerHTML == 'attaque') {
    menuattaque();
 }else if (document.getElementById('attaque').innerHTML == 'vive attaque') {
     attaquerapide();
 }else if (document.getElementById('attaque').innerHTML == 'potion') {
     petitepotion(); 
 }

}

//bouton haut droite // 

function btnhd() {
    
    if (document.getElementById('pokemon').innerHTML == 'pokemon') {
        menupokemon();
        
    }else if (document.getElementById('pokemon').innerHTML == 'tranche herbe') {
        attaquetranche();
    }else if (document.getElementById('pokemon').innerHTML == 'super potion') {
        moyennepotion();
    }
   
   }

// bouton bas gauche // 

   function btnbg() {
    
    if (document.getElementById('sac').innerHTML == 'sac') {
        menusac();
        
    }else if (document.getElementById('sac').innerHTML == 'poudre dodo') {
        attaquepoudredodo();
    }else if (document.getElementById('sac').innerHTML == 'hyper potion') {
        grandepotion();
    }
   
   }

// bouton bas droite //

   function btnbd() {
    
    if (document.getElementById('fuite').innerHTML == 'fuite') {
        menufuite();
        
    }else if (document.getElementById('fuite').innerHTML == 'lance soleil') {
        attaquelancesoleil();
    }else if (document.getElementById('fuite').innerHTML == 'ultra potion') {
        tresgrossepotion();
    }
   
   }




// les fonctions pour changer les noms des boutons

function menuattaque() {
  
    document.getElementById('attaque').innerHTML ='vive attaque';
    document.getElementById('pokemon').innerHTML = 'tranche herbe';
    document.getElementById('sac').innerHTML = 'poudre dodo';
    document.getElementById('fuite').innerHTML = 'lance soleil';
    document.getElementById('dialoguecote').innerHTML = 'on lance quelle attaque ?';
    
}

function menupokemon() {
    document.getElementById('attaque').innerHTML ='pikachu';
    document.getElementById('pokemon').innerHTML = 'salamèche';
    document.getElementById('sac').innerHTML = 'carapuce';
    document.getElementById('fuite').innerHTML = 'magicarpe';
    document.getElementById('dialoguecote').innerHTML = 'quel pokemon voulez vous ?';
}

function menusac() {
    document.getElementById('attaque').innerHTML ='potion';
    document.getElementById('pokemon').innerHTML = 'super potion';
    document.getElementById('sac').innerHTML = 'hyper potion';
    document.getElementById('fuite').innerHTML = 'ultra potion';
    document.getElementById('dialoguecote').innerHTML = 'que voulez vous faire ?';
}

function menufuite() {
    document.getElementById('dialoguecote').innerHTML = 'vous prenez la fuite...';
}


/* les attaques */

function attaquerapide() {
    HP = HP - viveattaque;
    document.getElementById('pointdevie').innerHTML = HP + ' PV';
    document.getElementById('pointdevie').style.width = HP + '%';
    viveattaque = entierAleatoire(5, 10);
     comparevie(); lesalertes(); viveallure();


}

function viveallure() {
    var element = document.getElementById("bulbu");
    
    var elm = element;
var newone = elm.cloneNode(true);
elm.parentNode.replaceChild(newone, elm);
  }





function attaquetranche() {
    HP = HP - tranche;
    document.getElementById('pointdevie').innerHTML = HP + ' PV';
    document.getElementById('pointdevie').style.width = HP + '%';
    tranche = entierAleatoire(10, 15);
    comparevie(); lesalertes(); viveallure();
}





function attaquepoudredodo() {
    HP = HP - poudre;
    document.getElementById('pointdevie').innerHTML = HP + ' PV';
    document.getElementById('pointdevie').style.width = HP + '%';
    poudre = entierAleatoire(15, 20);
    comparevie(); lesalertes(); viveallure();
}


function attaquelancesoleil() {
    HP = HP - lance;
    document.getElementById('pointdevie').innerHTML = HP + ' PV';
    document.getElementById('pointdevie').style.width = HP + '%';
    lance = entierAleatoire(20, 25);
    comparevie(); lesalertes(); viveallure();




}













// changement de la couleur en fonction de la vie 


function comparevie() {
    if (HP > 50) {
    //couleurprogressbarre('bg-sucess');
    document.getElementById("pointdevie").className = "progress-bar bg-success";
   // $( "#pointdevie" ).addClass( "bg-sucess" );
    } else if (HP > 25 && HP < 50) {
       // couleurprogressbarre("bg-warning");
        document.getElementById("pointdevie").className = "progress-bar bg-warning";
        //$( "#pointdevie" ).addClass( "bg-warning" );
    } else if (HP< 25) {
      //  couleurprogressbarre("bg-danger");
        document.getElementById("pointdevie").className = "progress-bar bg-danger";
       // $( "#pointdevie" ).addClass( "bg-danger" );
    }


}

function comparevie2() {
    if (mesHP > 50) {
   // couleurprogressbarre2('bg-sucess');
    document.getElementById("mespointdevie").className = "progress-bar bg-success";
   // $( "#pointdevie" ).addClass( "bg-sucess" );
    } else if (mesHP > 25 && mesHP < 50) {
        //couleurprogressbarre2("bg-warning");
        document.getElementById("mespointdevie").className = "progress-bar bg-warning";
        //$( "#pointdevie" ).addClass( "bg-warning" );
    } else if (mesHP < 25) {
        //couleurprogressbarre2("bg-danger");
        document.getElementById("mespointdevie").className = "progress-bar bg-danger";
       // $( "#pointdevie" ).addClass( "bg-danger" );
    }


}
// couleur de la barre 

function couleurprogressbarre(couleur) {
    var element = document.getElementById("pointdevie");
    element.classList.remove(couleur);
}

function couleurprogressbarre2(couleur) {
    var element = document.getElementById("mespointdevie");
    element.classList.remove(couleur);
}

/* annimation mort */

function lesalertes() {
    if (HP<=0) {
        
         mortalité();
        
       
    }
}

function mortalité() {
    var element = document.getElementById("ennemi");
    element.classList.add("mort");
    
  }



/* les fonctions potions */


function petitepotion() {
    mesHP = mesHP + potion;
    document.getElementById('mespointdevie').innerHTML = mesHP + ' PV';
    document.getElementById('mespointdevie').style.width = mesHP + '%';
     comparevie2(); lesalertes();


}

function moyennepotion() {
    mesHP = mesHP + superpotion;
    document.getElementById('mespointdevie').innerHTML = mesHP + ' PV';
    document.getElementById('mespointdevie').style.width = mesHP + '%';
     comparevie2(); lesalertes();


}

function grandepotion() {
    mesHP = mesHP + hyperpotion;
    document.getElementById('mespointdevie').innerHTML = mesHP + ' PV';
    document.getElementById('mespointdevie').style.width = mesHP + '%';
     comparevie2(); lesalertes();


}



function tresgrossepotion() {
    mesHP = mesHP + ultrapotion ;
    document.getElementById('mespointdevie').innerHTML = mesHP + ' PV';
    document.getElementById('mespointdevie').style.width = mesHP + '%';
     comparevie2(); lesalertes();

}

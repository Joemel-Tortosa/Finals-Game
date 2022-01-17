function youFight(){
    let leftFight = ["gifs/1left.gif","gifs/2left.gif","gifs/3left.gif"]
    
            let youFightRandom = Math.floor(Math.random() * leftFight.length);
            let youFightValue = (youFightRandom + 1) * 2
            let enemyMaxHealth = document.getElementById('enemyHp').value
            let enemyUpdatedHealth =  --enemyMaxHealth - youFightValue
            document.getElementById('enemyHp').value = enemyUpdatedHealth
            document.querySelector("#firstNumberGif").setAttribute("src", leftFight[youFightRandom]);

for (let i = 0; i < youFightValue ; i++) {
        document.getElementById('yourdamage').innerHTML = `<br> You Deal <b> ${youFightValue + 1} </b> 
        points of damage to enemy </br>`
        document.getElementById('enemyHealth').innerHTML = `<b>${enemyUpdatedHealth}</b>`
    }   

    if (enemyUpdatedHealth < 200 && enemyUpdatedHealth > 110 ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy High Hp </span>`
    } 
    else if (enemyUpdatedHealth < 110 && enemyUpdatedHealth > 90 ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy half Hp </span>`
    }
    else if (enemyUpdatedHealth < 90 && enemyUpdatedHealth > 40 ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy Low Hp </span>`
    }
    else if (enemyUpdatedHealth < 40 && enemyUpdatedHealth > 1  ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy Critical Hp </span>`
    }
    else if (enemyUpdatedHealth <= 0  ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy Lose </span>`
        document.getElementById('enemyHealth').innerHTML = `<b>0</b>`
    }
    

    let rightFight = ["gifs/1right.gif","gifs/2right.gif","gifs/3right.gif"]
    
            let enemyFightRandom = Math.floor(Math.random() * rightFight.length);
            let enemyFightValue = (enemyFightRandom + 1) * 2
            let yourMaxHealth = document.getElementById('yourHp').value
            yourUpdatedHealth = --yourMaxHealth - enemyFightValue
            document.getElementById('yourHp').value =  yourUpdatedHealth
            document.querySelector("#secondNumberGif").setAttribute("src", rightFight[enemyFightRandom]); 
    
for (let i = 0; i < enemyFightValue ; i++) {
        document.getElementById('enemydamage').innerHTML = `<br> The enemy Deals <b>${enemyFightValue + 1}</b> 
        points of damage to you </br>`
        document.getElementById('yourHealth').innerHTML = `<b>${yourUpdatedHealth}</b>`
    }   

    if ( yourUpdatedHealth < 200 && yourUpdatedHealth > 110 ) {
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> Fight Fight More! Fight </span>`
        }     
    else if ( yourUpdatedHealth < 110 && yourUpdatedHealth > 90 ){
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> You're in half of your health Fight! </span>`
        }     
    else if ( yourUpdatedHealth < 90 && yourUpdatedHealth > 40 ){
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> Low HP be careful Fight! More </span>`
        }     
    else if ( yourUpdatedHealth < 40 && yourUpdatedHealth > 1 ){
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> Critical Life! </span>`
        }    
    else if (yourUpdatedHealth <= 0){
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> You Lose </span>`
        document.getElementById('yourHealth').innerHTML = `<b>0</b>`
        }
}
    

function youMorph(){
    let leftMorph = ["gifs/Lmorph1.gif","gifs/Lmorph2.gif","gifs/Lmorph3.gif"]
    
            let youMorphRandom = Math.floor(Math.random() * leftMorph.length);
            let youMorphValue = (youMorphRandom + 1) * 3
            let enemyMaxHealth = document.getElementById('enemyHp').value
            enemyUpdatedHealth = --enemyMaxHealth - youMorphValue
            document.getElementById('enemyHp').value =  enemyUpdatedHealth
            document.querySelector("#firstNumberGif").setAttribute("src", leftMorph[youMorphRandom]);

for (let i = 0; i < youMorphValue ; i++) {
        document.getElementById('yourdamage').innerHTML = `<br> You Deal <b> ${youMorphValue + 1} </b> 
        points of morph's damage to enemy </br>`
        document.getElementById('enemyHealth').innerHTML = `<b>${enemyUpdatedHealth}</b>`
    }

    if (enemyUpdatedHealth < 200 && enemyUpdatedHealth > 110 ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy High Hp </span>`
    } 
    else if (enemyUpdatedHealth < 110 && enemyUpdatedHealth > 90 ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy half Hp </span>`
    }
    else if (enemyUpdatedHealth < 90 && enemyUpdatedHealth > 40 ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy Low Hp </span>`
    }
    else if (enemyUpdatedHealth < 40 && enemyUpdatedHealth > 1  ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy Critical Hp </span>`
    }
    else if (enemyUpdatedHealth <= 0  ) {
        document.getElementById('enemyStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: red"> Enemy Lose </span>`
        document.getElementById('enemyHealth').innerHTML = `<b>0</b>`
    }
    

    let rightMorph = ["gifs/Rmorph1.gif","gifs/Rmorph2.gif","gifs/Rmorph3.gif"]
    
            let enemyMorphRandom = Math.floor(Math.random() * rightMorph.length);
            let enemyMorphValue = (enemyMorphRandom + 1) * 3
            let yourMaxHealth = document.getElementById('yourHp').value
            yourUpdatedHealth = --yourMaxHealth - enemyMorphValue
            document.getElementById('yourHp').value =  yourUpdatedHealth
            document.querySelector("#secondNumberGif").setAttribute("src", rightMorph[enemyMorphRandom]);

for (let i = 0; i < enemyMorphValue ; i++) {
        document.getElementById('enemydamage').innerHTML = `<br> The enemy Deals <b>${enemyMorphValue + 1}</b> 
        points of morph's damage to you </br>`
        document.getElementById('yourHealth').innerHTML = `<b>${yourUpdatedHealth}</b>`
    }  
     
    if ( yourUpdatedHealth < 200 && yourUpdatedHealth > 110 ) {
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> Fight Fight More! Fight </span>`
    }     
    else if ( yourUpdatedHealth < 110 && yourUpdatedHealth > 90 ){
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> You're in half of your health Fight! </span>`
          }     
    else if ( yourUpdatedHealth < 90 && yourUpdatedHealth > 40 ){
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> Low HP be careful Fight! More </span>`
          }     
    else if ( yourUpdatedHealth < 40 && yourUpdatedHealth > 1 ){
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> Critical Life! </span>`
          }    
    else if (yourUpdatedHealth <= 0){
        document.getElementById('yourStatus').innerHTML = `<span style="font-family: Garamond ; 
        font-size: 30px ; color: #2f4047"> You Lose </span>`
        document.getElementById('yourHealth').innerHTML = `<b>0</b>`
    }
}

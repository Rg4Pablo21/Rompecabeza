function botones1(boton2) {
    let botones = document.createElement('div');
    botones.className = "botones"; 

    let logo = document.createElement('img');
    logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhK4D23WeEv1N1CNOE3d7oAO7LaZtpQzBpaw&s";
    logo.alt = "Logo";
    logo.className = "logo";
    
    botones.appendChild(logo);

    let nivlees = ["Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4", "Nivel 5"];
    for (let i = 0; i < nivlees.length; i++) {
        let btn = document.createElement("button");
        btn.innerText = nivlees[i];
        btn.classList.add(`btn-${i}`); 
        
        botones.appendChild(btn);
    }
    boton2.appendChild(botones);
}

export { botones1 };

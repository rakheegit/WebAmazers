function onEmailChange(value){
    const emailNode = document.getElementById("emailreg");
    const regButtonNode = document.getElementById("regMeButton");
    const emailRegex = /^.+@.+\..{2,4}$/;
    const matched = emailRegex.test(value);
    if(matched){
        emailNode.style.backgroundColor="rgba(124, 252, 0, " + 0.7 + ")";
        regButtonNode.disabled = false;
    }
    else{
        if (value.length>0){
            emailNode.style.backgroundColor="rgba(255, 95, 95, " + 0.7 + ")";
        }
        else{
            emailNode.style.backgroundColor="rgba(255, 255, 255, " + 0.7 + ")";
        }
        regButtonNode.disabled = true;
    }
}

function onPasswordChange(value){
    const passwordNode = document.getElementById("passwordreg");
    const regButtonNode = document.getElementById("regMeButton");
    const strengthNode = document.getElementById("strength");
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const matched = passRegex.test(value);
    if(matched){
        strengthNode.innerHTML = "Strong";
        strengthNode.style.color = "green";
    }
    else{
        if(value.length>0){
            strengthNode.innerHTML = "Weak";
            strengthNode.style.color = "red";
        }
        else{
            strengthNode.innerHTML = "";
        }
    }
}
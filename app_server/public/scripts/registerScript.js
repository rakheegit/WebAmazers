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
    const strengthNode = document.getElementById("strength");
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const cnfPasswordNode = document.getElementById("cnfpasswordreg");
    const passmatchNode = document.getElementById("passmatch");
    const matched = passRegex.test(value);
    const regButtonNode = document.getElementById("regMeButton");
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
    if(cnfPasswordNode.value == value){
        passmatchNode.innerHTML = "Password Matched";
        passmatchNode.style.color = "green";
        regButtonNode.disabled = false;
    }
    else{
        regButtonNode.disabled = true;
        passmatchNode.innerHTML = "";
    }
}

function onConfirmPasswordChange(value){
    const passNode = document.getElementById("passwordreg");
    const passmatchNode = document.getElementById("passmatch");
    const regButtonNode = document.getElementById("regMeButton");
    if(passNode.value === value){
        passmatchNode.innerHTML = "Password Matched";
        passmatchNode.style.color = "green";
        regButtonNode.disabled = false;
    }
    else{
        regButtonNode.disabled = true;
        passmatchNode.innerHTML = "";
    }
}
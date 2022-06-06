const isEmpty = (value) => {
    return !value.length;
}

const isWrongEmail = (value) => {
    let email = value.toLowerCase();
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(pattern.test(email)){
        return false;
    }else{
        return true;
    }
}

const isWrongPassword = (value) => {
    if(value.includes(" ")) {
        return true;
    }
    else {
        return false;
    }
}

const isWrongLengthPassword = (value) => {
    if(value.length < 6) {
        return true;
    }
    else {
        return false;
    }
}

export const validator = {
    email: [{
        rule: isEmpty,
        message: "You didn't fill the field 'Email address'."
    },
    {
        rule: isWrongEmail,
        message: "You entered the wrong field 'Email address'."
    }],
    password: [{
        rule: isEmpty,
        message: "You didn't fill the field 'Password'."
    },
    {
        rule: isWrongPassword,
        message: "You entered the wrong field 'Password'."
    },
    {
        rule: isWrongLengthPassword,
        message: "Password must be at least 6 characters long."
    }],
    confirmPassword: [{
        rule: isEmpty,
        message: "You didn't fill the field 'Confirm Password'."
    },
    {
        rule: isWrongPassword,
        message: "You entered the wrong field 'Confirm Password'."
    }],
}

export const checkValidLogin = (data) => {
    let values = data;

    let arrErrors = [];

    //found errors (check fields)
    arrErrors = Object.keys(values).reduce((acc, key) => {
        let newObj = validator[key].reduce((acc, obj) => {
            if(obj.rule(values[key])){
               return [...acc, obj.message];
            }else{
                return acc;
            }
        }, []);
        if(newObj.length != 0){
            return [...acc, newObj];
        }else{
            return acc;
        }
    }, []);

    /* let firstErrors = "";

    for(let i = 0; i < arrErrors.length; i++){
        firstErrors += arrErrors[i][0] + "\n";
    } */

    let firstErrors = arrErrors.map((e) => {return e[0]});

    return firstErrors;
}
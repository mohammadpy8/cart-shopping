export const validate = (data, type) => {

    const errors = {};

    if (!data.email) {
        errors.email = "email required";

    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "email adrres is invalid";

    } else {
        delete errors.email
    };

    if (!data.password) {
        errors.password = "password is required";

    } else if (data.password.length < 6) {
        errors.password = "password need to be 6 charachters or more";

    } else {
        delete errors.password;
    };

    if (type === "signup") {
        
        if (!data.name.trim()) {
            errors.name = "Username required";

        } else {
            delete errors.name;
            };
        if (!data.confirmPassword) {
            errors.confirmPassword = "confirm the password";
    
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "password do not match";
    
        } else {
            delete errors.confirmPassword;
        };
    
        if (data.isAccepted) {
            delete errors.isAccepted;
    
        } else {
            errors.isAccepted = "Accepted our requlations";
        };

    };

    return errors;
};
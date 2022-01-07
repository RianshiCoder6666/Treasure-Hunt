class System {

    constructor() {}

    authenticate(actualCode, enteredCode) {
        
        if(actualCode === enteredCode.toUpperCase()) 
            return true
        else
            return false
    }

}

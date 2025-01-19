class employee {
    constructor(username) {
        this.username = username
    }

    static logMe(){
        console.log(this.username) //
    }
}

class engineer extends employee {
    constructor(username, experience, role){
        super(username)
        this.experience = experience
        this.role = role
    }

    toAssignRole(){
        if (this.experience > 2) {
            this.role = "SDE-2"
        } else {
            this.role = "SDE-1"
        }
        // return this.role
    }

}

const applicant = new engineer("shantanu", 1, "SWE")

// console.log(applicant.username)
// applicant.logMe()
// applicant.toAssignRole()
// console.log(applicant.role)
// employee.logMe() for static case


export type UserData = {
    id?: string;
    firstname: string;
    lastname: string;
    adress: string;
    postalCode: string;
    city: string;
    birthdate: number;
    email: string
}

export class User implements UserData {
    firstname!: string;
    lastname!: string;
    adress!: string;
    postalCode!: string;
    city!: string;
    birthdate!: number;
    email!: string;

    constructor(userObj?: any) {
        this.firstname = userObj ? userObj.firstname : '';
        this.lastname = userObj ? userObj.lastname : '';
        this.adress = userObj ? userObj.adress : '';
        this.postalCode = userObj ? userObj.postalCode : '';
        this.city = userObj ? userObj.city : '';
        this.birthdate = userObj ? userObj.birthdate : '';
        this.email = userObj ? userObj.email : '';
    }

    toJson(): UserData {
        return {
            'firstname': this.firstname,
            'lastname': this.lastname,
            'adress': this.adress,
            'postalCode': this.postalCode,
            'city': this.city,
            'birthdate': this.birthdate,
            'email': this.email
        }
    }
}
class People {

    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    };

    toString() {
        return `Name: ${this.name} | e-Mail: ${this.email} | Phone: ${this.phone}`;
    };

}

class Client extends People {

    constructor(id, name, email, phone) {
        super(name, email, phone);
        this.id = id;
    };

    toString() {
        return `id: ${this.id} | ${super.toString()}`;
    };

}

let client = new Client(1, "João", "joaorca@gmail.com", "21999999999");
console.log(client.toString());
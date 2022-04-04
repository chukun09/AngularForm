export class Person {
    constructor(name: string, surName: string, emailAddress: string, listPhone: Phone[]) {
        this.name = name;
        this.surName = surName;
        this.emailAddress = emailAddress;
        this.listPhone = listPhone;
    }
    name: string;
    surName: string;
    emailAddress: string;
    listPhone: Phone[];
}
export class Phone {
    constructor(number: string, regionCode: string) {
        this.number = number;
        this.regionCode = regionCode;
    }
    number: string;
    regionCode: string;
}
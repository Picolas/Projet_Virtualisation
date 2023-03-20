export class Tasq {

    public id: number = 0;
    public name: string;
    public description: string;
    public category: string;
    public status: string;
    public date: Date;

    constructor(name: string, description: string, category: string, status: string, date: Date) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.status = status;
        this.date = date;
    }

    public setId(id: number) {
        this.id = id;
    }

}
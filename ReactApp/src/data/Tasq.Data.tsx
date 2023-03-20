// add Tasq data testing

import {Tasq} from "../Model/Tasq/Tasq";

export class TasqData {

    // singleton
    private static instance: TasqData;
    public tasqsData: Tasq[] = [];

    public constructor() {
        // push new tasqs
        this.tasqsData.push(new Tasq( "Tasq 1", "Description 1", "Category 1", 'false', new Date()));
        this.tasqsData.push(new Tasq( "Tasq 2", "Description 2", "Category 2", 'false', new Date()));
        this.tasqsData.push(new Tasq( "Tasq 3", "Description 3", "Category 3", 'false', new Date()));
        this.tasqsData.push(new Tasq( "Tasq 4", "Description 4", "Category 4", 'false', new Date()));
        this.tasqsData.push(new Tasq( "Tasq 5", "Description 5", "Category 5", 'false', new Date()));
        this.tasqsData.push(new Tasq( "Tasq 6", "Description 6", "Category 6", 'false', new Date()));
        this.tasqsData.push(new Tasq( "Tasq 7", "Description 7", "Category 7", 'false', new Date()));
        this.tasqsData.push(new Tasq( "Tasq 8", "Description 8", "Category 8", 'false', new Date()));
        this.tasqsData.push(new Tasq( "Tasq 9", "Description 9", "Category 9", 'false', new Date()));
        this.tasqsData.push(new Tasq( "Tasq 10", "Description 10", "Category 10", 'false', new Date()));
    }

    public static getInstance(): TasqData {
        if (!TasqData.instance) {
            TasqData.instance = new TasqData();
        }
        return TasqData.instance;
    }

}
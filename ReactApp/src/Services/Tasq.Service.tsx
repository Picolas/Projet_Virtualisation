import {Tasq} from "../Model/Tasq/Tasq";
import {TasqData} from "../data/Tasq.Data";
import {TasqQueryService} from "./TasqQuery.Service";

export class TasqService {

    // fais moi un singleton
    private static instance: TasqService;

    public constructor() {
    }

    public static getInstance(): TasqService {
        if (!TasqService.instance) {
            TasqService.instance = new TasqService();
        }
        return TasqService.instance;
    }

    public async getTasqs(): Promise<Tasq[]> {
        return await TasqQueryService.getTasqs();
    }

    public async getTasq(id: number): Promise<Tasq> {
        return await TasqQueryService.getTasq(id);
    }

    public async addTasq(tasq: Tasq): Promise<Tasq> {
        return await TasqQueryService.addTasq(tasq);
    }

    public async updateTasq(tasq: Tasq): Promise<Tasq> {
        return await TasqQueryService.updateTasq(tasq);
    }

    public async deleteTasq(tasq: Tasq): Promise<Tasq> {
        return await TasqQueryService.deleteTasq(tasq);
    }
}
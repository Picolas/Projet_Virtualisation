// use React Query library https://react-query-v3.tanstack.com/guides/queries to fetch data from the backend
import {Tasq} from "../Model/Tasq/Tasq";
import {supabase} from "../Utils/Supabase/iniSupabase";

export class TasqQueryService {

    public static URL: string = "http://localhost:3000";

    // get all tasqs from supabase using supabase js client
    public static async getTasqs(): Promise<any[]> {
        const {data, error} = await supabase
            .from('tasqs')
            .select('*');
        if (error) {
            console.log('error', error);
            return [];
        }
        return data;
    }

    // add tasq to supabase using supabase js client
    public static async addTasq(tasq: Tasq): Promise<any> {
        const {data, error} = await supabase
            .from('tasqs')
            .insert([
                {name: tasq.name, description: tasq.description, category: tasq.category, status: tasq.status, date: tasq.date},
            ]);
        if (error) {
            console.log('error', error);
            return null;
        }
        return data;
    }

    // update tasq to supabase using supabase js client
    public static async updateTasq(tasq: Tasq): Promise<any> {
        const {data, error} = await supabase
            .from('tasqs')
            .update({name: tasq.name, description: tasq.description, category: tasq.category, status: tasq.status, date: tasq.date})
            .eq('id', tasq.id);
        if (error) {
            console.log('error', error);
            return null;
        }
        return data;
    }

    // delete tasq to supabase using supabase js client
    public static async deleteTasq(tasq: Tasq): Promise<any> {
        const {data, error} = await supabase
            .from('tasqs')
            .delete()
            .eq('id', tasq.id);
        if (error) {
            console.log('error', error);
            return null;
        }
        return data;
    }

    // get single tasq from supabase using supabase js client
    public static async getTasq(id: number): Promise<any> {
        const {data, error} = await supabase
            .from('tasqs')
            .select('*')
            .eq('id', id);
        if (error) {
            console.log('error', error);
            return null;
        }
        return data;
    }


}
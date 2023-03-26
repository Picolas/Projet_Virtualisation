export class LaravelService {

    public LARAVEL_API_URL = process.env.LARAVEL_API_URL;

    // singleton
    private static instance: LaravelService;

    public constructor() {
    }

    public static getInstance(): LaravelService {
        if (!LaravelService.instance) {
            LaravelService.instance = new LaravelService();
        }
        return LaravelService.instance;
    }


    // get Laravel message from json object message => "hello world" with a get request to api/hello url
    public async getLaravelMessage(): Promise<string> {
        const response = await fetch(this.LARAVEL_API_URL + '/api/hello');
        const data = await response.json();
        return data.message;
    }
}
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createBook(response: any, book: any): Promise<void>;
    fetchAll(response: any): Promise<void>;
    findById(response: any, id: any): Promise<void>;
}

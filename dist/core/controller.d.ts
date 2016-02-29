export declare abstract class BaseController {
    req: any;
    res: any;
    static router: any;
    post(model: any, form: any, request: any, response: any): void;
    put(model: any, form: any, request: any, response: any): void;
    static processForm(model: any, form: any, request: any, response: any, method: string): void;
    delete(res: any, object: any): void;
}

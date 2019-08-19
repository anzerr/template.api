import 'reflect-metadata';
import { Server } from 'http.ts';
import Logger from '@util/logger';
export default class MainController extends Server.Controller {
    logger: Logger;
    get(): Promise<any>;
}

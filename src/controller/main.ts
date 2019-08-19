
import 'reflect-metadata';
import {Server, Controller, Get, Midware} from 'http.ts';
import {Inject} from 'inject.ts';
import {Meta} from 'swagger.ts';
import Logger from '@util/logger';
import {DOG} from '@util/enum';
import midware from '../entity/midware';

@Controller('/api/v1')
export default class MainController extends Server.Controller {

	@Inject(Logger)
	logger: Logger;

	@Get(':name')
	@Midware(midware.validate)
	@Meta.param.path('name', 'account to query on', DOG.NAME)
	@Meta.responses(200, 'good')
	@Meta.responses(500, 'bad')
	get(): Promise<any> {
		return this.status(200).json({dog: `good ${this.param.name}`});
	}

}

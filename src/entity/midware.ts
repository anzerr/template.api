
import 'reflect-metadata';
import {Server} from 'http.ts';

class MidWare extends Server.Controller {

	validate(): any {
		if (!this.param.name.match(/^[a-z]+$/)) {
			return this.status(400).send('bad name');
		}
	}

}

export default new MidWare();

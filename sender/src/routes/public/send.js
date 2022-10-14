import * as rabbit from '../../rabbit'
import config from 'config'
import { v4 as uuidv4 } from 'uuid';

const send = async (ctx) => {
  const broker = await rabbit.getInstance();
  const queue = config.rabbit.queue; 
  const json = {...ctx.request.body, id: uuidv4()};
  const msg = JSON.stringify(json);
  await broker.send(queue, Buffer.from(msg));
  ctx.body = '';
}

export default {
  send
}

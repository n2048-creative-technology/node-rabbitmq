import rabbit from './rabbit'
import config from 'config'

rabbit.getInstance()
  .then(broker => {
    broker.subscribe(config.rabbit.queue, (msg, ack) => {
      console.log('Message:', msg.content.toString())
      ack()
    })
  })

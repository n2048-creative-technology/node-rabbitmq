# node-rabbitmq
Node.js example of communication via RabbitMQ

<br />

==Communicating using RabbitMQ in Node.js==

Example Code (Uses Koa, JWT and  amqplib):

https://github.com/n2048-creative-technology/node-rabbitmq



<br />

==== 1. Run RabbitMQ on Docker: ====
<syntaxhighlight lang="bash">
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
</syntaxhighlight>Open [http://localhost:15672/#/exchanges http://localhost:15672/]<syntaxhighlight lang="bash">
user: guest
pass: guest
</syntaxhighlight>


Clone code from Repository and install dependencies:<syntaxhighlight lang="bash">
git clone https://github.com/n2048-creative-technology/node-rabbitmq.git
cd node-rabbitmq-example/sender
npm i
cd ../receiver
npm i

</syntaxhighlight>Open one terminal on the sender folder and run `npm start`

Open several terminals on the receiver directory and run `npm start`

on a different terminal run:<syntaxhighlight lang="bash">
while true; do 
    curl --location --request POST 'http://127.0.0.1:8080/send' --header 'Content-Type: application/json' --data-raw '{
    "msg": "TEST"}'; 
    sleep 0.1; 
done

</syntaxhighlight>Navigate to http://localhost:15672/#/channels to monitor the messages


[[File:Screenshot rabbitMQ admin.png]]

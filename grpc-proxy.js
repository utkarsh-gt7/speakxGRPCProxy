const express = require('express');
const cors = require('cors');
const grpcWeb = require('@grpc-web/middleware');

const app = express();

const grpcServerAddress = 'https://speak-x-assignment-server-rgm9.vercel.app/';

app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });

//app.use(cors({ exposedHeaders: ['grpc-status', 'grpc-message'] }));
app.use(cors({
    origin: '*',
    exposedHeaders: ['grpc-status', 'grpc-message'],
  }));
  
app.use(grpcWeb(grpcServerAddress));


app.listen(process.env.PORT, () => {
  console.log('gRPC-Web Proxy is running on port 8080');
});

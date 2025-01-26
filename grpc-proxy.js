const express = require('express');
const cors = require('cors');
const grpcWeb = require('@grpc-web/middleware');

const app = express();

// Specify the gRPC server address
const grpcServerAddress = 'https://speakx-assignmentserver.onrender.com'; // Update with your gRPC server address

app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
  });

//app.use(cors({ exposedHeaders: ['grpc-status', 'grpc-message'] }));
app.use(cors({
    origin: '*', // Allow all origins for testing
    exposedHeaders: ['grpc-status', 'grpc-message'],
  }));
  
app.use(grpcWeb(grpcServerAddress)); // Pass the gRPC server address


app.listen(process.env.PORT, () => {
  console.log('gRPC-Web Proxy is running on port 8080');
});

The React based frontend first makes a request to this proxy server. And then this proxy server converts that HTTP based request from frontend to a 
gRPC request for the base server and returns the response containing various questions back to the frontend.

In order to setup this proxy server locally. Make sure that both these urls are locating to your correct base server, and local ports respectively => 
1) const grpcServerAddress = 'https://speak-x-assignment-server-rgm9.vercel.app/'; //Mention the address of your locally setup base server. Refer the base server link on line 11.

2) app.listen(process.env.PORT, () => {
      console.log('gRPC-Web Proxy is running on port 8080');
    }); //Here your port could be 8080 for local setup.

Repo to the base server => https://github.com/utkarsh-gt7/speakX_AssignmentServer

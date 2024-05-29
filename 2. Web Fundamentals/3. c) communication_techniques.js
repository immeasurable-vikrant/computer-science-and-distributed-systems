`
"Real-Time Communication: Client-Server Communication Techniques: "

        Short polling, long polling, and server-sent events (SSE) fall under the category of 
        client-server communication techniques. These techniques describe the methods used to 
        facilitate communication between a client and a server, specifically for receiving 
        updates from the server.

        They are approaches or strategies applied within the context of existing 
        communication protocols to achieve real-time or near-real-time data transfer.
        
        Important: Short Polling, Long Polling, and Server-Sent Events (SSE) are techniques that 
                implement real-time communication using HTTP (usually HTTP/1.x but can work with HTTP/2). 
                These are techniques or methods built on top of HTTP to achieve real-time updates. They 
                define specific patterns of interaction within the HTTP protocol to manage how updates 
                are delivered from the server to the client.
        
        #Short Polling - 

        What: Short polling is a technique where the client periodically sends HTTP requests 
                to the server to check for new data.

        Why: This method is straightforward to implement and can be used when the client 
                needs to check for updates at regular intervals.

        Where: Short polling is commonly used in situations where the server does not 
                need to push updates to the client immediately and the overhead of 
                frequent requests is acceptable. Examples include simple status checks, 
                updates to less frequently changing data, or legacy systems.

        How:
        - The client sends a request to the server at regular intervals (e.g., every few seconds).
        - The server processes the request and checks for new data.
        - The server responds with the new data (if available) or an empty response if no 
                new data is available.
        - The client waits for a specified interval and repeats the process.
        
        Advantages:
        - Simple to implement.
        - Works with standard HTTP/1.1.
        
        Disadvantages:
        - Inefficient in terms of bandwidth and server resources due to frequent requests.
        - Increased latency as the client might wait for the next polling interval to receive new data.

        Duplex/Simplex: Short polling is a simplex communication technique as it only 
                involves the client sending requests and the server responding without 
                maintaining an open communication channel.

        #Long Polling -
        
        What: Long polling is an optimization over short polling where the client sends a 
                request to the server, and the server holds the connection open until 
                new data is available or a timeout occurs.

        Why: This method reduces the number of requests and the associated overhead 
                compared to short polling, making it more efficient for scenarios where data 
                updates are less frequent but need to be delivered as soon as they are available.
        

        Where: Long polling is often used in applications like chat systems, notifications, 
                or real-time updates where timely delivery of new data is important, 
                but data changes are not constant.

        How:

        - The client sends a request to the server.
        - The server holds the request open and waits for new data.
        - When new data is available, the server responds with the data.
        - The client processes the data and immediately sends another request to the 
                server to wait for the next update.
        
        Advantages:
        - Reduces the number of requests compared to short polling.
        - Lower latency in delivering new data compared to short polling.
        
        Disadvantages:
        - Can tie up server resources holding connections open.
        - More complex to implement compared to short polling

        Duplex/Simplex: Long polling is still considered simplex communication as each 
                request-response cycle is independent, but the server holds the request 
                open, simulating a near real-time communication channel.


        #Server-Sent Events (SSE) -

        What: Server-sent events (SSE) is a standard for pushing updates from the server to 
                the client over a single HTTP connection.

        Why: SSE is designed for sending continuous updates from the server to the client in a 
                simple and efficient manner, suitable for real-time applications.

        Where: SSE is commonly used for live feeds, notifications, stock price updates, or any 
                application requiring continuous updates from the server.

        How:

        - The client opens a single HTTP connection to the server using an EventSource object.
        - The server sends updates to the client over this open connection as they become available.
        - The client listens for messages from the server and processes them as they arrive.
        - The connection remains open, and the server can continue sending updates.
        
        Advantages:
        - Efficiently uses a single open connection for continuous updates.
        - Built-in support for automatic reconnection and event ID tracking to resume from the last event after a disconnection.
        - Simpler to implement than WebSockets for unidirectional data flow.
        
        Disadvantages:
        - Unidirectional: data can only flow from server to client.
        - Not suitable for applications requiring bidirectional communication (e.g., real-time games, chat applications where the client also needs to send frequent updates to the server).

        Duplex/Simplex: SSE is a simplex communication method as it allows only unidirectional 
                communication from server to client.


        Comparison and Use Cases
         - Short Polling:
                - Use When: Simplicity is more important than efficiency, or when updates are infrequent, and a slight delay is acceptable.
                - Example: Periodic updates of less critical data like weather updates.
        
        - Long Polling:
                - Use When: Immediate delivery of updates is needed, but implementing more complex solutions like WebSockets is not feasible.
                - Example: Chat applications, notifications.
        
        Server-Sent Events (SSE):

                - Use When: Continuous, real-time updates are required from server to client in a scalable and efficient manner.
                - Example: Live news feeds, real-time dashboards, stock price updates.

`;

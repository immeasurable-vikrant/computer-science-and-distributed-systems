`
        "What happens when you type a URL in browser"
        
        1. URL Parsing
                - The browser parses the URL to extract the different components that make up the web address. 
                It identifies the protocol (e.g. http, https, ftp), the domain name, and any path or query parameters.
                        For example, in the URL "https://www.example.com/page?id=123", the browser determines:
                        - Protocol: https://
                        - Domain name: www.example.com
                        - Path: /page
                        - Query parameters: ?id=123
                The browser uses the protocol to determine how to handle the URL. If it's http or https, 
                the browser will process it internally. For other protocols like ftp, mailto, or skype, the browser may 
                handle it or pass it to an external application.
        
        
        2. DNS Resolution
                Once the domain name is extracted, the browser checks if it's already an IP address. If not, it needs to 
                        query the Domain Name System (DNS) to resolve the domain name to an IP address.
                The browser sends a DNS query to a DNS resolver, which is typically provided by the user's ISP. 
                        The resolver follows a series of steps to find the authoritative DNS server for the domain and retrieve 
                        the IP address.

                        - The resolver first checks its cache to see if it has the IP address cached from a previous lookup.
                        - If not cached, it sends an iterative query to the root DNS servers.
                        - The root servers provide the address of the top-level domain (TLD) servers responsible for .com, .org, etc.
                        - The resolver then queries the appropriate TLD server.
                        - The TLD server provides the address of the authoritative DNS server for the specific domain.
                        - The resolver sends a final query to the authoritative server, which responds with the IP address.
                The resolver returns the IP address to the browser, which can now initiate a connection to the web server.
                
        
        3. TCP Connection Establishment
                - The browser initiates a TCP connection with the web server using the resolved IP address and the port 
                        specified in the URL (default is port 80 for http, 443 for https).
                - It does this by sending a TCP SYN packet to the server. If the server is listening on that IP and port, 
                        it responds with a SYN-ACK packet. The browser then sends an ACK packet to acknowledge receipt, completing the three-way handshake to establish the connection.
        
        
        4. HTTP Request
        - With the TCP connection established, the browser sends an HTTP request to the server for the 
                resource specified in the URL path.
        - The request includes the HTTP method (GET, POST, etc.), the path, HTTP headers with additional 
                information, and sometimes a request body.
                        For example, a GET request for https://www.example.com/page?id=123 might look like:
                        GET /page?id=123 HTTP/1.1
                        Host: www.example.com

        
        
        5. Server Processing
                - The web server receives the HTTP request, processes it, and generates a response.
                - The server software (e.g. Apache, Nginx) reads the request, parses the headers and URL, 
                        and determines what resource to serve. It may need to interact with databases or 
                        application servers to generate dynamic content.
        
        
        6. HTTP Response
                - The server constructs an HTTP response containing the requested resource, such as an HTML document, 
                        and sends it back to the browser over the established TCP connection.
                - The response includes an HTTP status code (e.g. 200 OK), response headers with metadata, and the 
                        response body containing the actual content.
        
        
        7. Rendering
                - The browser receives the HTTP response and begins parsing and rendering the HTML content.
                - It constructs the Document Object Model (DOM) tree from the HTML elements. It also parses any l
                        inked CSS and JavaScript resources, constructing the CSSOM (CSS Object Model) and executing the JavaScript.
                - The browser's rendering engine (e.g. Blink in Chrome, Gecko in Firefox) lays out the page elements 
                        according to the CSS rules and paints the content to the screen.
        
        
        8. User Interaction
                - With the initial page loaded, the user can now interact with the web page by clicking links, submitting forms, 
                        or triggering JavaScript events.
                - The browser handles these interactions, potentially sending additional HTTP requests to the server for 
                        new pages or data. JavaScript can also manipulate the DOM to update the page without a full refresh.
                - The browser continues this cycle of sending requests, receiving responses, and rendering pages as the user 
                        avigates the website.


`
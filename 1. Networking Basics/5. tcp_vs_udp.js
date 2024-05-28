`
TCP and UDP Protocols:

        What: TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two of the main transport 
                layer protocols used in computer networks to facilitate communication between devices.

        Why:

        TCP: Provides reliable, connection-oriented communication with error checking, flow control, and congestion control. 
                It ensures that data is delivered in order and without loss, making it ideal for applications requiring 
                guaranteed delivery, such as web browsing, email, and file transfer.

        UDP: Offers lightweight, connectionless communication with minimal overhead. It does not guarantee delivery or 
                order of packets, making it suitable for real-time applications like streaming media, online gaming, 
                and VoIP, where speed and efficiency are prioritized over reliability.


        How:

        TCP (Transmission Control Protocol):
        - Connection-oriented: Establishes a connection between sender and receiver before data transfer.
        - Reliable: Ensures data integrity and order through features like acknowledgments, retransmissions, and sequencing.
        - Example: Web browsing (HTTP), file transfer (FTP), email (SMTP).
        
        
        UDP (User Datagram Protocol):
        - Connectionless: Does not establish a connection before sending data.
        - Unreliable: Does not guarantee delivery or order of packets. It's a "best-effort" protocol.
        - Low overhead: Minimal processing and overhead make it faster and more efficient than TCP.
        - Example: Real-time applications like streaming media (UDP-based RTP), online gaming (UDP-based protocols), Voice over IP (VoIP).
        
        Examples:

        TCP Example (Web Browsing):
                - When you visit a website, your browser uses TCP to establish a connection with the web server (three-way handshake).
                - TCP ensures that all packets containing the webpage data are delivered reliably and in order.
                - If any packet is lost or corrupted during transmission, TCP retransmits it until it's successfully received.
        
        UDP Example (Online Gaming):
                - In online gaming, UDP is commonly used due to its low latency and minimal overhead.
                - Game data, such as player positions and actions, is sent using UDP packets.
                - While UDP doesn't guarantee delivery or order, the speed and responsiveness it offers are crucial for real-time gameplay.
                - Loss or delay of a few packets may not significantly impact gameplay, whereas the delay introduced by TCP's retransmission mechanisms could lead to a poor gaming experience.


Understanding the differences between TCP and UDP is essential for designing and optimizing network protocols and 
applications based on their specific requirements for reliability, speed, and efficiency.


`
`
The OSI (Open Systems Interconnection):

What is OSI Model?
The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes the functions of a 
telecommunication or computing system into seven layers. It helps in understanding and designing network communication systems.

Why OSI Model?
It provides a systematic approach to understand how data flows from one device to another over a network. By dividing 
the communication process into layers, it enables interoperability between different networking technologies and devices.

How OSI Model Works:
Each layer in the OSI model performs specific functions and communicates with the layers above and below it. 
Data moves through these layers sequentially, with each layer adding its own header or trailer information.


Each layer serves a specific purpose, enabling devices to communicate effectively:

1. Physical Layer: This layer deals with the physical transmission of data over the network medium, 
        such as cables or wireless signals. It defines the electrical and mechanical specifications of the hardware, 
        like Ethernet cables or Wi-Fi signals. Real-world example: Ethernet cables, fiber optic cables.

2. Data Link Layer: Responsible for node-to-node communication, ensuring data packets are delivered error-free.
        It encapsulates data into frames and includes error detection and correction mechanisms. Real-world example: 
        Ethernet switches, Wi-Fi access points.

3. Network Layer: Handles routing and forwarding of data packets between different networks. It determines the 
        optimal path for data transmission using logical addressing (IP addresses) and routing protocols (e.g., OSPF, BGP). 
        Real-world example: Routers, IP addresses.

4. Transport Layer: Provides end-to-end communication between source and destination devices. It ensures 
        reliable and orderly delivery of data by establishing connections (TCP) or sending data without acknowledgment (UDP). 
        Real-world example: TCP, UDP.

5. Session Layer: Manages sessions or connections between applications on different devices. It establishes, maintains, 
        and terminates connections, allowing for full-duplex or half-duplex communication. Real-world example: APIs, session 
        initiation protocols.

6. Presentation Layer: Handles data representation, encryption, and compression. It ensures that data is 
        presented in a readable format for the application layer and handles data encryption/decryption and data 
        compression/decompression. Real-world example: SSL/TLS, encryption algorithms.

7. Application Layer: Provides network services directly to end-users or applications. 
        It includes protocols for tasks such as file transfer (FTP), email (SMTP), web browsing (HTTP), 
        and remote login (SSH). Real-world example: HTTP, FTP, SMTP.



TCP/IP Model:

        What: The TCP/IP (Transmission Control Protocol/Internet Protocol) model is a concise version of the OSI model, 
                consisting of four layers and primarily used in modern computer networks, including the internet.
        
        Why: It offers a more practical and streamlined approach to networking, focusing on the key aspects required for 
                internet communication while still providing interoperability with OSI-based systems.
        
        How: The TCP/IP model's layers correspond closely to those of the OSI model but are combined to form a 
                simpler, more efficient framework for network communication.
        
        Link Layer (or Network Interface Layer): Similar to the OSI physical and data link layers, it deals with 
                physical connections and data framing. Example: Ethernet frames.
        
        Internet Layer: Equivalent to the OSI network layer, it handles addressing, routing, and packet forwarding. 
                Example: Internet Protocol (IP).
        
        Transport Layer: Similar to the OSI transport layer, it ensures reliable end-to-end data delivery. 
                Example: Transmission Control Protocol (TCP).
        
        Application Layer: Corresponds to the OSI application layer, providing network services directly to end-users and applications.
                Example: Hypertext Transfer Protocol (HTTP) for web browsing.



Interoperability refers to the degree to which a software system, devices, applications or other entity can connect and
communicate with other entities in a coordinated manner without effort from the end user. 
`
`
IP Addressing and Subnetting:
        What: IP addressing is the process of assigning unique identifiers to devices connected to a
                network, enabling them to communicate with each other. Subnetting is the practice of 
                dividing a larger network into smaller, more manageable subnetworks.

        Why: IP addressing allows devices to be identified and located within a network, facilitating communication. 
                Subnetting helps optimize network performance, manage traffic, and improve security by organizing 
                devices into smaller groups.

        How:

        IPv4 Addressing:

        - Format: IPv4 addresses are 32-bit numbers, typically represented in decimal format separated by periods (e.g., 192.168.1.1).
        - Classes: IPv4 addresses were originally divided into five classes (A, B, C, D, E) based on their leading bits, determining 
                the network and host portions.
        - Subnetting: In subnetting, the host bits of an IP address are divided into network and host portions using a 
                subnet mask. For example, subnetting a Class C address (e.g., 192.168.1.0) into smaller subnets.
        
        IPv6 Addressing:

        - Format: IPv6 addresses are 128-bit numbers, represented in hexadecimal format separated by colons 
                (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
        - Advantages: IPv6 provides a significantly larger address space than IPv4, allowing for more unique addresses 
                and simplifying address allocation.
        - Subnetting: Similar to IPv4, subnetting in IPv6 involves dividing the address space into smaller subnets 
                using a subnet prefix. For example, subnetting a /64 prefix into smaller subnets.


        Examples:
        IPv4 Addressing Example:

        - IP Address: 192.168.1.100
        - Subnet Mask: 255.255.255.0 (Class C)
        - Subnetting: Dividing the network 192.168.1.0/24 into smaller subnets 
                (e.g., 192.168.1.0/26, 192.168.1.64/26, 192.168.1.128/26, 192.168.1.192/26).


        IPv6 Addressing Example:

        - IP Address: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
        - Subnet Prefix: 2001:0db8:85a3::/64
        - Subnetting: Dividing the IPv6 network prefix 2001:0db8:85a3::/64 into smaller 
                subnets (e.g., 2001:0db8:85a3:0001::/64, 2001:0db8:85a3:0002::/64).

IP addressing and subnetting are fundamental concepts in computer networking, crucial for designing and 
managing efficient and scalable networks in both IPv4 and IPv6 environments.
`
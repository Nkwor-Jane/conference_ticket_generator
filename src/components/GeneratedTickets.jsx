import { useState, useEffect } from "react"; 

const GeneratedTickets = () => {
    const [tickets, setTickets] = useState([]);
    
    useEffect(() => {
        const savedTickets = JSON.parse(localStorage.getItem("ticketHistory")) || [];
        setTickets(savedTickets);
    }, []);

    return (
        <div className="bg-lightregal-blue h-9/10 rounded-2xl p-6 border border-stroke sm:w-lg md:w-xl ">
            <h2 className="text-2xl font-bold mb-4">Ticket History</h2>
            {tickets.length > 0 ? (
                <ul className="space-y-2">
                    {tickets.map((ticket, index) => (
                        <li key={index} className="border p-2 rounded bg-regal-blue border border-btn-blue rounded-2xl">
                            <p><strong>Name:</strong> {ticket.fullName}</p>
                            <p><strong>Email:</strong> {ticket.email}</p>
                            <p><strong>Ticket Type:</strong> {ticket.ticketType}</p>
                            <p><strong>Serial Number:</strong> {ticket.serialNumber}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tickets generated yet.</p>
            )}
        </div>
    );
}

export default GeneratedTickets
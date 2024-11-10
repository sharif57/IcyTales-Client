// import { useState } from "react";

// // Define your API key (replace this with your actual key)
// const API_KEY = "AIzaSyAain92GkOOnHWGkyUwMk49dH_AEypWzv8";
// const API_URL =
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Handle sending the user's message and chatbot's response
//   const handleSendMessage = async () => {
//     if (input.trim() !== "") {
//       // Add user's message to the chat history
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: input, sender: "user" },
//       ]);

//       setLoading(true); // Show loading indicator while waiting for response

//       // Call the API to get the chatbot's response
//       try {
//         const botResponse = await fetchBotResponse(input);
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { text: botResponse, sender: "bot" },
//         ]);
//       } catch (error) {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { text: "Sorry, something went wrong.", sender: "bot" },
//         ]);
//       } finally {
//         setLoading(false); // Hide loading indicator
//       }

//       setInput(""); // Clear the input after sending
//     }
//   };

//   // Function to fetch the bot response from the API
//   const fetchBotResponse = async (userInput) => {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         input: {
//           text: userInput,
//         },
//         key: API_KEY,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch response from API");
//     }

//     const data = await response.json();
//     return data?.content || "Sorry, I didn't understand that.";
//   };

//   return (
//     <div className="w-1/2 mt-10 mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden">
//       <div className="flex flex-col h-[400px]">
//         {/* Header */}
//         <div className="px-4 py-3 border-b dark:border-zinc-700">
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
//               Chatbot Assistant
//             </h2>
//             <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
//               Online
//             </div>
//           </div>
//         </div>

//         {/* Chat Display */}
//         <div
//           className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
//           id="chatDisplay"
//         >
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`chat-message ${
//                 msg.sender === "user"
//                   ? "self-start bg-zinc-500 text-white"
//                   : "self-end bg-blue-500 text-white"
//               } max-w-xs rounded-lg px-3 py-1.5 text-sm`}
//             >
//               {msg.text}
//             </div>
//           ))}
//           {loading && (
//             <div className="self-end bg-gray-400 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm">
//               Typing...
//             </div>
//           )}
//         </div>

//         {/* Input Section */}
//         <div className="px-3 py-2 border-t dark:border-zinc-700">
//           <div className="flex gap-2">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message..."
//               className="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
//               id="chatInput"
//               type="text"
//             />
//             <button
//               onClick={handleSendMessage}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
//               id="sendButton"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

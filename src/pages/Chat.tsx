import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Upload, Send } from "lucide-react";
import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to the contracts & chat system!", sender: "system", timestamp: new Date() },
  ]);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto pt-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contracts Section */}
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4">Contracts</h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-400">Drag and drop your contract files here</p>
                <Button className="mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                  Upload Contract
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Supported formats: PDF, DOC, DOCX</p>
                <p className="text-sm text-gray-400">Max file size: 10MB</p>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <div className="md:col-span-2 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4">Chat</h2>
            <div className="flex flex-col h-[600px]">
              <ScrollArea className="flex-1 px-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg ${
                        message.sender === "system"
                          ? "bg-gray-700 text-white"
                          : "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white"
                      }`}
                    >
                      <p>{message.text}</p>
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="mt-4 flex gap-2">
                <Input
                  placeholder="Type your message..."
                  className="flex-1 bg-white/10 border-gray-700 text-white"
                />
                <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
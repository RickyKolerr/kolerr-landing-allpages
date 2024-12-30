import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import {
  Search,
  Send,
  Paperclip,
  Circle,
  MoreVertical,
  Image as ImageIcon,
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: Date;
}

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  online: boolean;
  avatar: string;
}

const mockContacts: Contact[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    lastMessage: "Let's discuss the campaign details",
    online: true,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  },
  {
    id: 2,
    name: "Mike Chen",
    lastMessage: "Contract has been signed",
    online: false,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  },
  {
    id: 3,
    name: "Emma Davis",
    lastMessage: "Thanks for the quick response",
    online: true,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  },
];

const mockMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! How can I help you today?",
    sender: "them",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: 2,
    text: "I'd like to discuss the upcoming campaign",
    sender: "me",
    timestamp: new Date(Date.now() - 1800000),
  },
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "me",
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
    
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
    });
  };

  const filteredContacts = mockContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
      {/* Contacts List */}
      <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search conversations..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="space-y-2">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
              >
                <div className="relative">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <Circle
                    className={`absolute bottom-0 right-0 w-3 h-3 ${
                      contact.online ? "text-green-500" : "text-gray-400"
                    } fill-current`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {contact.name}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {contact.lastMessage}
                  </p>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="md:col-span-3 bg-white/5 rounded-lg p-4 backdrop-blur-sm flex flex-col">
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === "me"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Separator className="my-4" />
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="shrink-0"
            onClick={() => {
              toast({
                title: "Attachment",
                description: "File upload feature coming soon!",
              });
            }}
          >
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0"
            onClick={() => {
              toast({
                title: "Image",
                description: "Image upload feature coming soon!",
              });
            }}
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
            className="flex-1"
          />
          <Button
            className="shrink-0 bg-purple-500 hover:bg-purple-600"
            onClick={handleSendMessage}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
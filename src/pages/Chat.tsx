import { Navigation } from "@/components/layout/Navigation";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { ContractManager } from "@/components/chat/ContractManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, FileText } from "lucide-react";

const Chat = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto pt-24 px-4">
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8">
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="contracts" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Contracts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="mt-0">
            <ChatInterface />
          </TabsContent>
          
          <TabsContent value="contracts" className="mt-0">
            <ContractManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Chat;
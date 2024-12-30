import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import {
  FileText,
  Upload,
  Filter,
  Plus,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

interface Contract {
  id: number;
  title: string;
  status: "pending" | "active" | "completed";
  date: string;
  parties: string[];
}

const mockContracts: Contract[] = [
  {
    id: 1,
    title: "Summer Campaign Agreement",
    status: "active",
    date: "2024-03-15",
    parties: ["Brand X", "Influencer Y"],
  },
  {
    id: 2,
    title: "Product Review Contract",
    status: "pending",
    date: "2024-03-20",
    parties: ["Company A", "Creator B"],
  },
  {
    id: 3,
    title: "Sponsorship Deal",
    status: "completed",
    date: "2024-03-10",
    parties: ["Agency C", "Influencer D"],
  },
];

export const ContractManager = () => {
  const [contracts] = useState<Contract[]>(mockContracts);
  const { toast } = useToast();

  const getStatusColor = (status: Contract["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-500";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "completed":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getStatusIcon = (status: Contract["status"]) => {
    switch (status) {
      case "active":
        return <CheckCircle2 className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "completed":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-2">
          <Button
            onClick={() => {
              toast({
                title: "Create Contract",
                description: "Contract creation feature coming soon!",
              });
            }}
            className="bg-purple-500 hover:bg-purple-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Contract
          </Button>
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>
        <div className="flex gap-2">
          <Input placeholder="Search contracts..." className="w-[200px]" />
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Contracts Grid */}
      <ScrollArea className="h-[calc(100vh-350px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contracts.map((contract) => (
            <Card key={contract.id} className="bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg text-white">
                      {contract.title}
                    </CardTitle>
                    <CardDescription>Due: {contract.date}</CardDescription>
                  </div>
                  <Badge
                    className={`${getStatusColor(
                      contract.status
                    )} flex items-center gap-1`}
                  >
                    {getStatusIcon(contract.status)}
                    {contract.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Parties Involved:</p>
                    <div className="flex flex-wrap gap-2">
                      {contract.parties.map((party, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-white"
                        >
                          {party}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        toast({
                          title: "View Contract",
                          description: "Contract viewer coming soon!",
                        });
                      }}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        toast({
                          title: "Download Contract",
                          description: "Download feature coming soon!",
                        });
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
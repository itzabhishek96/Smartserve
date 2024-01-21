// "use client";
// import axios from "axios";
// import {Heading} from "@/components/heading";
// import { MessageSquare } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { formSchema } from "./constants";
// import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { useState , useEffect} from "react";

// import { cn } from "@/lib/utils";

// import OpenAI from "openai"
// import { Empty } from "@/components/empty";
// import { Loader } from "@/components/loader";
// import { UserAvatar } from "@/components/user-avatar";
// import { BotAvatar } from "@/components/bot-avatar";

// const ConversationPage = () => {
//   const router = useRouter();
//   const [messages, setMessages] = useState<OpenAI.Chat.ChatCompletionMessage[]>(
//     []
//   );

//   useEffect(() => {
//     const savedMessages = localStorage.getItem("conversationMessages");
//     if (savedMessages) {
//       setMessages(JSON.parse(savedMessages));
//     }
//   }, []);

//   // Save messages to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("conversationMessages", JSON.stringify(messages));
//   }, [messages]);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       prompt: "",
//     },
//   });

//   const isLoading = form.formState.isSubmitting;

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     try {
//       console.log(values);//added line
//       const userMessage = {
//         role: "user",
//         content: values.prompt,
//       };
//       const newMessages = [...messages, userMessage];

//       const response = await axios.post("/api/conversation", {
//         messages: newMessages,
//       });

//       setMessages((current) => [
//         ...current,
//         userMessage,
//         response.data,
//       ]);
//       form.reset();
//     } catch (error: any) {
//       // TODO Open Pro Modal
//       console.log(error);
//     } finally {
//       router.refresh();
//     }
//   }

//   return (
//     <div>
//       <Heading
//         title="Conversation"
//         description="Our most advanced conversation model"
//         icon={MessageSquare}
//         iconColor="text-violet-500"
//         bgColor="bg-violet-500/10"
//       />
//       <div className="px-4 lg:px-8">
//         <div>
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-md focus-within:shadow-purple-500/10 grid grid-cols-12 gap-2"
//             >
//               <FormField
//                 name="prompt"
//                 render={({ field }) => (
//                   <FormItem className="col-span-12 lg:col-span-10">
//                     <FormControl className="m-0 p-0">
//                       <Input
//                         className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
//                         disabled={isLoading}
//                         placeholder="Tell me how to make a coffee"
//                         {...field}
//                       />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />
//               <Button
//                 className="col-span-12 lg:col-span-2"
//                 disabled={isLoading}
//               >
//                 Generate
//               </Button>
//             </form>
//           </Form>
//         </div>
//         <div className="space-y-4 mt-4">
//         {isLoading && (
//             <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
//               <Loader />
//             </div>
//           )}
//             {messages.length === 0 && !isLoading && (
//                 <Empty label="No conversation started." />
//             )}
//          <div className="flex flex-col-reverse gap-y-4">
//             {messages.map((message) =>(
//                 <div 
//                 key={message.content}
//                 className={cn(
//                     "p-8 w-full flex items-start gap-x-8 rounded-lg",
//                     message.role === "user" ? "bg-white border border-black/10" : "bg-muted",
//                   )}
//                 >
//                 {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
//                 <p className="text-sm">
//                   {message.content}
//                 </p>
//                 </div>
//             ))}
//          </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConversationPage;


"use client";
import axios from "axios";
import {Heading} from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState , useEffect} from "react";
import { toast } from "react-hot-toast";

import { cn } from "@/lib/utils";

import OpenAI, { ChatCompletionRequestMessage } from "openai"
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import {RefreshCcw} from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";
//import { FaRedo } from "react-icons/fa"; // Import an icon of your choice



function formatResponseText(text: string | null) {
  if (text === null) {
    return null; // or return some default content or an empty array
  }

  const paragraphs = text.split('\n\n'); // Split text into paragraphs

  return paragraphs.map((paragraph, index: number) => (
    <p key={index} className="text-sm">
      {paragraph.split('\n').map((point, pointIndex) => (
        <span key={pointIndex}>
          {point}
          <br /> {/* Add a line break after each point */}
        </span>
      ))}
    </p>
  ));
}


const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [resetChat, setResetChat] = useState<boolean>(false); // Add state for resetting chat


  useEffect(() => {
    const savedMessages = localStorage.getItem("conversationMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("conversationMessages", JSON.stringify(messages));
  }, [messages]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);//added line
      const userMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessages((current) => [
        ...current,
        userMessage,
        response.data,
      ]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  }
  const handleResetChat = () => {
    setMessages([]); // Clear messages
    setResetChat(true); // Set the reset flag
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
              <Button
                className=" px-4 py-2 rounded-md absolute top-0 right-0 m-2 my-20 mr-8"

              onClick={handleResetChat}
            >
              <RefreshCcw />
            </Button>
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-md focus-within:shadow-purple-500/10 grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Tell me how to make a coffee"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
          <div className="mt-4 relative top-4">
    
          </div>
        </div>
        <div className="spacey-4 mt-4">
        {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
            {messages.length === 0 && !isLoading && (
                <Empty label="No conversation started." />
            )}
         <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) =>(
                <div 
                key={message.content}
                className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg",
                    message.role === "user" ? "bg-white border border-black/10" : "bg-muted",
                  )}
                >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">
                {formatResponseText(message.content|| null)}
                </p>
                </div>
            ))}
         </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;

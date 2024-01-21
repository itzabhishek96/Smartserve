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
import { MessageSquare, Music } from "lucide-react";
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

import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";


const Musicpage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setMusic(undefined);

      const response = await axios.post("/api/music", values)

      setMusic(response.data.audio);

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


  return (
    <div>
      <Heading
        title="Music"
        description="Turn your prompt into music"
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
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
                        placeholder="Piano solo"
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
            {!music && !isLoading && (
                <Empty label="No music generated." />
            )}
            {music && (
              <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default Musicpage;

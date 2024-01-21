// "use client";


// import { useRouter } from "next/navigation";
// import { ArrowRight, MessageSquare, Music, ImageIcon, VideoIcon, CodeIcon } from "lucide-react";
// import {Card} from "@/components/ui/card";
// import { cn } from "@/lib/utils";

// const tools = [
//   {
//     label: "Conversation",
//     icon: MessageSquare,
//     color: "text-violet-500",
//     bgColor: "bg-violet-500/10",
//     href: "/conversation"
//   },
//   {
//     label: "Image Generation",
//     icon: ImageIcon,
//     color: "text-pink-700",
//     bgColor: "bg-pink-700/10",
//     href: "/image"
//   },
//   {
//     label: "Video Generation",
//     icon: VideoIcon,
//     color: "text-orange-700",
//     bgColor: "bg-orange-700/10",
//     href: "/video"
//   },
//   {
//     label: "Music Generation",
//     icon: Music,
//     color: "text-emerald-500",
//     bgColor: "bg-emerald-500/10",
//     href: "/music"
//   },
//   {
//     label: "Code Generation",
//     icon: CodeIcon,
//     color: "text-green-700",
//     bgColor: "bg-green-700/10",
//     href: "/code"
//   },
// ]


// const Dashboardpage = () => {
//   const router = useRouter();
//   return (
//       <div>
//         <div className="mb-8 space-y-4">
//           <h2 className="text-2xl md:text-4xl font-bold text-center">
//             Explore the power of AI
//           </h2>
//           <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
//           Harness the limitless potential of AI through our cutting-edge AI SaaS platform, where innovation meets seamless functionality.
//           </p>
//         </div>
//         <div className="px-4 md:px-20 lg:px-20 space-y-4">
//           {tools.map((tool)=>(
//             <Card
//             onClick={() => router.push(tool.href)} 
//               key={tool.href}
//               className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
//             >
//               <div className="flex items-center gap-x-4">
//                 <div className={cn("p-2 2-fit rounded-md", tool.bgColor)}>
//                   <tool.icon className={cn("w-8 h-8", tool.color)}/>
//                 </div>
//                 <div className="font-semibold">
//                   {tool.label}
//                 </div>
//               <div>
//               </div>
//               </div>
//               <ArrowRight className="w-5 h-5"/>

//             </Card>
//           ))}
//         </div>
//       </div>
//     )
// }

// export default Dashboardpage;


"use client";
import { useRouter } from "next/navigation";
import {
  MessageSquare,
  Music,
  ImageIcon,
  VideoIcon,
  CodeIcon,
  Plus,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video"
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music"
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code"
  },
  {
    label: "More",
    icon: Plus,
    color: "tex-blue-700",
    bgColor: "bg-blue-700/10",
    href: "/more"
  },
]
const Dashboardpage = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="mb-8 text-center animate-fadeInUp">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Welcome to the Future of AI
        </h2>
        <p className="text-gray-600 text-lg">
          Explore our cutting-edge AI platform and unleash the power of the future today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div key={tool.href}>
            <Card
              onClick={() => router.push(tool.href)}
              className={`p-6  rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer transition-all duration-300 ${tool.bgColor}`}
            >
              <div className={`flex items-center justify-center mb-4 animate-fadeIn`}>
                <div className="p-4 rounded-full">
                  <tool.icon className={`w-16 h-16 ${tool.color}`} />
                </div>
              </div>
              <div className={`text-xl font-semibold text-center text-gray-800 hover:bg-opacity-20`}>
                {tool.label}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboardpage;
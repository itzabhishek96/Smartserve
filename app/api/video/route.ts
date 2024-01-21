// // import { auth } from "@clerk/nextjs";
// // import { NextResponse } from "next/server";
// // import Replicate from "replicate";


// // const replicate = new Replicate({
// //   auth: process.env.REPLICATE_API_TOKEN!,
// // });

// // export async function POST(req: Request) {
// //   try {
// //     const { userId } = auth();
// //     const body = await req.json();
// //     const { prompt } = body;

// //     if (!userId) {
// //       return new NextResponse("Unauthorized", { status: 401 });
// //     }

// //     if (!prompt) {
// //       return new NextResponse("Prompt is required", { status: 400 });
// //     }

    
// //     const response = await replicate.run(
// //       "cjwbw/damo-text-to-video:1e205ea73084bd17a0a3b43396e49ba0d6bc2e754e9283b2df49fad2dcf95755",
// //       {
// //         input: {
// //           prompt
// //         }
// //       }
// //     );


// //     return NextResponse.json(response);
// //   } catch (error) {
// //     console.log("[VIDEO_ERROR]", error);
// //     return new NextResponse("Internal Error", { status: 500 });
// //   }
// // }

// // import Replicate from "replicate";
// // import { auth } from "@clerk/nextjs";
// // import { NextResponse } from "next/server";


// // const replicate = new Replicate({
// //   auth: process.env.REPLICATE_API_TOKEN!,
// // });

// // export async function POST(
// //   req: Request
// // ) {
// //   try {
// //     const { userId } = auth();
// //     const body = await req.json();
// //     const { prompt  } = body;

// //     if (!userId) {
// //       return new NextResponse("Unauthorized", { status: 401 });
// //     }

// //     if (!prompt) {
// //       return new NextResponse("Prompt is required", { status: 400 });
// //     }



// //     const response = await replicate.run(
// //       "zsxkib/animate-diff:269a616c8b0c2bbc12fc15fd51bb202b11e94ff0f7786c026aa905305c4ed9fb",
// //       {
// //         input: {
// //           prompt,
// //         }
// //       }
// //     );


// //     return NextResponse.json(response);
// //   } catch (error) {
// //     console.log('[VIDEO_ERROR]', error);
// //     return new NextResponse("Internal Error", { status: 500 });
// //   }
// // };

// import Replicate from "replicate";
// import { auth } from "@clerk/nextjs";
// import { NextResponse } from "next/server";



// const replicate = new Replicate({
//   auth: process.env.REPLICATE_API_TOKEN!,
// });

// export async function POST(
//   req: Request
// ) {
//   try {
//     const { userId } = auth();
//     const body = await req.json();
//     const { prompt  } = body;

//     if (!userId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     if (!prompt) {
//       return new NextResponse("Prompt is required", { status: 400 });
//     }


//     const response = await replicate.run(
//       "anotherjesse/zeroscope-v2-xl:71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f",
//       {
//         input: {
//           prompt,
//         }
//       }
//     );


//     return NextResponse.json(response);
//   } catch (error) {
//     console.log('[VIDEO_ERROR]', error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// };/


import Replicate from "replicate";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro  ) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f",
      {
        input: {
          prompt,
        }
      }
    );

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log('[VIDEO_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
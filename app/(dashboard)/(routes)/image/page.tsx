"use client";
import axios from "axios";
import {Heading} from "@/components/heading";
import { ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { amountOptions, formSchema, resolutionOptions } from "./constants";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState , useEffect} from "react";
import { Download } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import OpenAI from "openai"
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { toast } from "react-hot-toast";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import { useProModal } from "@/hooks/use-pro-modal";


const ImagePage = () => {
    const proModal= useProModal();
    const router = useRouter();
    const [images, setImages] = useState<string[]>([]);
    // const page = toolsObjects.image;
    // const defaultResolution = resolutionOptions[1].value;
 
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        setImages([]);
        const response = await axios.post("/api/image", values);
        const urls = response.data.map((image: { url: string }) => image.url);
        setImages(urls);
        
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
    };

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
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
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="A picture of a horse near lake"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
              name="amount"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <FormControl className="m-0 p-0">
                    <Select
                      value={field.value}
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      disabled={isLoading}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((Option)=>(
                          <SelectItem
                          key={Option.value}
                          value={Option.value}
                          >
                          {Option.label}
                          </SelectItem>
                        ))}
                        {/* {Array.apply(0, Array(maxPhotoOptions)).map(function (
                          x,
                          index
                        ) {
                          return (
                            <SelectItem key={index + 1} value={`${index + 1}`}>
                              {index + 1} {index === 0 ? "Photo" : "Photos"}
                            </SelectItem>
                          );
                        })} */}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="resolution"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-2">
                  <FormControl className="m-0 p-0">
                    <Select
                      value={field.value}
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      disabled={isLoading}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map(function (resolution) {
                          return (
                            <SelectItem
                              key={resolution.value}
                              value={resolution.value}
                            >
                              {resolution.value}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
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
            <div className="p-20">
              <Loader />
            </div>
          )}
            {images.length === 0 && !isLoading && (
                <Empty label="No images generated." />
            )}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {images.map((src) => (
            <Card 
            key={src} 
            className="rounded-lg overflow-hidden"
            >
              <div className="relative aspect-square">
                <Image fill alt="Generated" src={src} sizes="100vw" />
              </div>
              <CardFooter className="p-2">
                <Button
                  onClick={() => window.open(src)}
                  variant="secondary"
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;

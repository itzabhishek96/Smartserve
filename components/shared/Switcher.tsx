"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Label } from "@/components/ui/label";

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

interface Props {
  query: string;
  label: string;
}

const Switcher = ({ query, label }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramFilter = searchParams.get(query);

  const handleUpdateParams = (value: string) => {
    let newUrl;

    if (!value) {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: [query],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: query,
        value,
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <>

      <Label htmlFor={`${query}-switcher`} className="text-light-500">
        {label}
      </Label>
    </>
  );
};

export default Switcher;

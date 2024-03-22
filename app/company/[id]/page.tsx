import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import CompanySimilar from "@/components/CompanyDetails/CompanySimilar";
import LargeCompanyDetails from "@/components/CompanyDetails/LargeCompanyDetails";
import { getFirstCompany } from "@/utils/getFirstCompany";
import { getAllJobs } from "@/utils/getAllJobs";
import { getCompanyDetails } from "@/utils/getCompanyDetails";

export const metadata: Metadata = {
  title: "Jobit - Company Details",
  description: "Job Finder Web Application",
};

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: String };
  searchParams: { query: string };
}) => {
  const { id } = params;
  const { query } = searchParams;
  const companyId = id.toString();
  const jobDetails = await getAllJobs();
  if (!jobDetails) return "no companies found";
  const firstCompany = await getFirstCompany(companyId);
  if (!firstCompany) return "no companies found";
  const initialJobDetails = getCompanyDetails(companyId, query);
  if (!initialJobDetails) return "no jobs found";

  return (
    <div className="padding-layout flex flex-col gap-y-9 pb-[90px] pt-[46px] mx-24">
    {/* Back Button */}
    <div className="flex items-center space-x-2">
      <button className="flex items-center gap-2 rounded-[10px]  px-[10px] py-[7px]  bg-darkBG-3 text-natural-6">
        <Image
          src="/img/icons/cheveron.svg"
          priority
          height={18}
          width={18}
          alt="icon"
        />
        <span className="text-sm">Back</span>
      </button>
    </div>
    
    {/* Main Content */}
    <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-10">
      {/* Large Company Details */}
      <div className="flex justify-center w-full max-w-[816px] rounded-xl bg-darkBG-2">
        <LargeCompanyDetails
          firstCompany={firstCompany}
          companyId={companyId}
          jobDetails={initialJobDetails}
        />
      </div>
      
      {/* Company Similar */}
      <div className="flex flex-col md:max-w-[400px]">
        <CompanySimilar jobDetails={jobDetails} />
      </div>
    </div>
  </div>
  
  );
};

export default Page;

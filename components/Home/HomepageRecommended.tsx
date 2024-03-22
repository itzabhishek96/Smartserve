import React from "react";
import Button from "../Reusable/Button";
import InlineJobCard from "./Cards/InlineJobCard";
import { HomepageCardProps } from "@/types";

const HomepageRecommended = ({ jobListings }: HomepageCardProps) => {
  // Need to create algo for recommended
  return (
    <section className="flex w-full max-w-full shrink-0 flex-col gap-4 xl:max-w-[23rem]">
      <div className="flex items-center justify-between">
        <h5 className="headline-5">Recommended For You</h5>
        <Button
          style="body-11 border border-natural-2 dark:border-darkBG-2 px-2 py-1 rounded-jobit text-natural-6"
          title={"See All"}
          href="/jobsearch"
        />
      </div>
      <div className="flex flex-col items-center gap-2 rounded-jobit bg-white p-4 dark:bg-darkBG-2">
        {jobListings?.slice(5, 10).map((jobListing) => (
          <React.Fragment key={jobListing.job_id}>
            <InlineJobCard data={jobListing} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HomepageRecommended;

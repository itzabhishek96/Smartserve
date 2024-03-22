import { JobDetailsResponse } from "@/types";

export const fetchJob = async (id: string) => {
  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${id}&extended_publisher_details=false`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_API_KEY || "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result: JobDetailsResponse = await response.json();

  return result;
};

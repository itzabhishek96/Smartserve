import { JobDetails } from "@/types";
import React from "react";

interface Props {
  jobs: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
}

const Pagination = ({ jobs, currentPage, onPageChange, pageSize }: Props) => {
  const pagesCount = Math.ceil(jobs / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <section className="mt-4 flex">
      <ul className={"flex flex-wrap items-center justify-center md:gap-1"}>
        {pages.map((page) => (
        <li
        key={page}
        className={`${
          page === currentPage
            ? "bg-gray-600 text-white"
            : "hover:text-white hover:bg-gray-500 bg-slate-200"
        } m-2 cursor-pointer rounded-lg border border-gray-300 px-4 py-2 flex items-center justify-center`}
        onClick={() => onPageChange(page)}
      >
        <a className="text-sm font-medium">{page}</a>
      </li>
      
        ))}
      </ul>
    </section>
  );
};
export default Pagination;

export const paginate = (
  items: JobDetails[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

"use client";
import React, { useState } from "react";
import moment from "moment";
import "moment/locale/bn";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";

const notices = [
  {
    id: 1,
    title: "নতুন ডেলিভারি চার্জ কাঠামো",
    details:
      "২০২৩ সালের ১লা অক্টোবর থেকে নতুন ডেলিভারি চার্জ কাঠামো কার্যকর হবে। বিস্তারিত জানতে আমাদের ওয়েবসাইট ভিজিট করুন।\n\nEffective from October 1, 2023, a new delivery charge structure will be implemented. Visit our website for more details.",
    date: "2023-10-01",
  },
  {
    id: 2,
    title: "ঈদ উৎসব উপলক্ষে বিশেষ ডেলিভারি সার্ভিস",
    details:
      "ঈদ উৎসব উপলক্ষে Promise Delivery বিশেষ ডেলিভারি সার্ভিস চালু করছে। আগামী ১০ দিন পর্যন্ত এই সার্ভিস পাওয়া যাবে।\n\nPromise Delivery is launching a special delivery service for the Eid festival. This service will be available for the next 10 days.",
    date: "2023-06-15",
  },
  {
    id: 3,
    title: "ডেলিভারি সময়সূচী পরিবর্তন",
    details:
      "আগামী সপ্তাহ থেকে Promise Delivery এর ডেলিভারি সময়সূচী পরিবর্তন করা হয়েছে। নতুন সময়সূচী আমাদের ওয়েবসাইটে পাওয়া যাবে।\n\nThe delivery schedule of Promise Delivery has been changed starting next week. The new schedule is available on our website.",
    date: "2023-07-20",
  },
  {
    id: 4,
    title: "ক্যাশ অন ডেলিভারি (COD) সার্ভিস বন্ধ",
    details:
      "২০২৩ সালের ১৫ই নভেম্বর থেকে Promise Delivery ক্যাশ অন ডেলিভারি (COD) সার্ভিস বন্ধ করবে। অনলাইন পেমেন্টের মাধ্যমে অর্ডার করুন।\n\nPromise Delivery will discontinue Cash on Delivery (COD) service from November 15, 2023. Please place your orders using online payment methods.",
    date: "2023-11-15",
  },
  {
    id: 5,
    title: "সাধারণ ছুটির দিনে ডেলিভারি পরিষেবা চালু থাকবে",
    details:
      "Promise Delivery সাধারণ ছুটির দিনেও ডেলিভারি পরিষেবা চালিয়ে যাবে। বিস্তারিত জানতে ওয়েবসাইট দেখুন।\n\nPromise Delivery will continue its delivery service even on public holidays. Visit our website for more details.",
    date: "2023-12-25",
  },
  {
    id: 6,
    title: "Promise Delivery নতুন শাখা চালু",
    details:
      "Promise Delivery এখন চট্টগ্রামের নতুন শাখা থেকে পার্সেল গ্রহণ করছে।\n\nPromise Delivery is now accepting parcels from its new Chattogram branch.",
    date: "2023-09-10",
  },
  {
    id: 7,
    title: "Promise Delivery - ঢাকা মেট্রো সিটির নতুন এক্সপ্রেস ডেলিভারি",
    details:
      "Promise Delivery এখন ঢাকা মহানগরীতে ২৪ ঘণ্টার মধ্যে এক্সপ্রেস ডেলিভারি চালু করেছে।\n\nPromise Delivery has launched 24-hour express delivery in Dhaka Metro City.",
    date: "2023-08-05",
  },
  {
    id: 8,
    title: "Promise Delivery - নতুন পার্সেল ট্র্যাকিং সুবিধা",
    details:
      "আপনার পার্সেল এখন Promise Delivery ওয়েবসাইটে গিয়ে অনলাইনে ট্র্যাক করতে পারবেন। ট্র্যাকিং নম্বর ব্যবহার করুন।\n\nNow you can track your parcel online on the Promise Delivery website. Use your tracking number.",
    date: "2023-10-20",
  },
  {
    id: 9,
    title: "Promise Delivery - গ্রামে ডেলিভারি চার্জ কমানো হয়েছে",
    details:
      "Promise Delivery গ্রামীণ অঞ্চলের জন্য ডেলিভারি চার্জ কমিয়েছে। নতুন চার্জ জানতে ওয়েবসাইট দেখুন।\n\nPromise Delivery has reduced delivery charges for rural areas. Visit our website to check the new charges.",
    date: "2023-09-30",
  },
  {
    id: 10,
    title: "Promise Delivery - এসএমইদের জন্য বিশেষ ডেলিভারি ডিসকাউন্ট",
    details:
      "এসএমই ব্যবসার জন্য Promise Delivery ২০% বিশেষ ছাড় দিচ্ছে। অফার সম্পর্কে বিস্তারিত জানতে আমাদের ওয়েবসাইটে যান।\n\nPromise Delivery is offering a 20% discount on deliveries for SMEs. Visit our website for details on this offer.",
    date: "2023-11-10",
  },
];

const NoticeItem = ({ notice, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 p-4 w-full bg-white shadow-sm ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <div className="flex flex-col lg:justify-between lg:flex-row lg:items-center w-full">
          <div>
            <h3 className="text-lg font-semibold">{notice.title}</h3>
          </div>
          <div>
            <p className="text-sm text-gray-500 mr-10">
              {moment(notice.date).locale("bn").format("LL")}
            </p>
          </div>
        </div>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="mt-5 text-gray-600 whitespace-pre-line">
          <p>{notice.details}</p>
        </div>
      )}
    </div>
  );
};

const NoticePage = () => {
  const [openNoticeId, setOpenNoticeId] = useState(null);

  const handleNoticeClick = (id) => {
    setOpenNoticeId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>Notice</BreadcrumbItem>
        <BreadcrumbItem>Notice List</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full p-4 bg-gray-50 min-h-screen mb-5 mt-5">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center mb-6">
            নোটিস বোর্ড / Notice Board
          </h1>
          <div className="w-full flex flex-col space-y-2">
            {notices.map((notice) => (
              <NoticeItem
                key={notice.id}
                notice={notice}
                isOpen={openNoticeId === notice.id}
                onClick={() => handleNoticeClick(notice.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticePage;

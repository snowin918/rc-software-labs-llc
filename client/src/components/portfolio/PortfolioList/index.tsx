import React from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/siteContent";

const PortfolioList = () => {
  return (
    <section id="portfolio" className="md:pb-24 pb-16 pt-8 dark:bg-darkmode">
      <div className="flex flex-wrap gap-[2.125rem] lg:px-[2.125rem] px-0 max-w-[120rem] w-full justify-center m-auto">
        {portfolioItems.map((item, index) => (
          <Link key={item.title + index} href="/portfolio/#!">
            <div className={`w-[18rem] group ${item.className ?? ""}`}>
              <div className="relative overflow-hidden rounded-lg transition-all duration-500 group-hover:scale-[1.1] group-hover:cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </div>
              <h4 className="pb-[0.3125rem] pt-[2.1875rem] text-2xl font-bold text-midnight_text transition group-hover:cursor-pointer group-hover:text-primary dark:text-white">
                {item.title}
              </h4>
              <p className="text-lg font-normal text-secondary transition group-hover:cursor-pointer group-hover:text-primary dark:text-white/50">
                {item.info}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioList

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

const SectionWrapper = ({ id, className, children }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "section-panel py-24 md:py-32 transition-colors duration-300 motion-reduce:duration-0",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

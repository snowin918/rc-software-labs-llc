import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContentRowProps = {
  title: string;
  body: ReactNode;
  index?: string;
  className?: string;
};

const ContentRow = ({ title, body, index, className }: ContentRowProps) => {
  return (
    <div
      className={cn(
        "content-row border-b border-brand-border py-6 first:pt-0 last:border-b-0 last:pb-0",
        className,
      )}
    >
      <div className="flex gap-4 sm:gap-6">
        {index ? (
          <span className="shrink-0 font-display text-sm font-medium text-brand-primary tabular-nums">
            {index}
          </span>
        ) : null}
        <div className="space-y-2">
          <h3 className="text-heading">{title}</h3>
          <div className="text-body-sm">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentRow;

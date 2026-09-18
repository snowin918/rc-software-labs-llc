import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  className?: string;
};

const SectionHeader = ({
  eyebrow,
  title,
  lead,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      <p className="text-label">{eyebrow}</p>
      <h2 className="text-title">{title}</h2>
      {lead ? <div className="space-y-3 text-body text-brand-soft/90">{lead}</div> : null}
    </div>
  );
};

export default SectionHeader;

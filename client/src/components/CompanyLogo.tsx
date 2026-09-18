import Image from "next/image";
import { legalName } from "@/data/company";

export default function CompanyLogo() {
  return (
    <Image
      src="/images/logo/mark.svg"
      alt={legalName}
      width={64}
      height={64}
      className="h-14 w-14 shrink-0 sm:h-16 sm:w-16"
    />
  );
}

"use client";

import routes from "@/constants/routes";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const SideBar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const onNavigate = (url: string, pro: boolean) => {
    // TODO: check if pro...

    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex justify-center flex-1">
        <div className="space-y-2">
          {routes.map((link) => (
            <div
              key={link.href}
              onClick={() => onNavigate(link.href, link.pro)}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition hover:text-primary hover:bg-primary/10",
                pathName === link.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col items-center flex-1 gap-y-2">
                <link.icon className="h-5 w-5" /> 

                {link.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

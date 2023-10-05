"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ChangeEventHandler, useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import queryString from "query-string";

const SearchInput = () => {
  const searchParam = useSearchParams();
  const router = useRouter();

  const categoryId = searchParam.get("categoryId");
  const name = searchParam.get("name");

  const [value, setValue] = useState(name || "");
  const debounceValue = useDebounce<string>(value, 500); // half second pause

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debounceValue,
      categoryId,
    };

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debounceValue, router, categoryId]);

  return (
    <div className="relative">
      <Search className="absolute top-3 left-4 h-4 w-4" />

      <Input
        onChange={onChange}
        value={value}
        placeholder="Search..."
        className="pl-10 bg-primary/10"
      />
    </div>
  );
};

export default SearchInput;

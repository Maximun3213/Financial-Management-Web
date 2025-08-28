"use client";

import SearchInput, { TInputRef } from "@/components/SearchInput";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";

function Search(): React.ReactElement {
  const inputRef = useRef<TInputRef>(null);

  return (
    <Box pb={"2.5rem"} borderBottom={"1px solid var(--border-color)"}>
      <SearchInput
        ref={inputRef}
        placeholder="Search anything on Transactions"
      />
    </Box>
  );
}

export default Search;

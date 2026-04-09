import { Categories } from "./categories";
import { SearchInput } from "./search_input";

interface SearchFiltersProps {
  data: any;
}

export const SearchFilters = ({ data }: SearchFiltersProps) => {
  return (
    <div className="flex w-full flex-col gap-4 border-b px-4 py-8 lg:px-12">
      <SearchInput />
      <Categories data={data} />
    </div>
  );
};

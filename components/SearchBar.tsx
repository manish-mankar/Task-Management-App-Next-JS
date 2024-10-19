import { Input } from "./ui/input";

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="w-full sm:w-64">
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search tasks..."
        className="w-full"
      />
    </div>
  )
}
import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp, Globe } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export const CountrySwitcher = ({ 
  variant = "dark",
  className = "",
  showLabel = false,
  style = "select"
}: { 
  variant?: "light" | "dark" 
  className?: string
  showLabel?: boolean
  style?: "select" | "dropdown"
}) => {
  const { country, setCountry } = useCountry();
  const [open, setOpen] = useState(false);
  
  const textColor = variant === "light" ? "text-white" : "text-gray-800";
  const iconColor = variant === "light" ? "text-white" : "text-gray-500";
  
  const countries = [
    { value: "singapore", label: "Singapore", flag: "🇸🇬" },
    { value: "uae", label: "UAE", flag: "🇦🇪" },
    { value: "australia", label: "Australia", flag: "🇦🇺" }
  ];

  const selectedCountry = countries.find(c => c.value === country) || countries[0];

  const formatCountryName = (countryCode: string) => {
    if (countryCode === 'uae') {
      return 'UAE';
    }
    return countryCode.charAt(0).toUpperCase() + countryCode.slice(1);
  };

  const handleCountryChange = (newCountry: 'singapore' | 'uae' | 'australia') => {
    setCountry(newCountry);
  };

  if (style === "dropdown") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={`flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-700 focus:outline-none hover:bg-gray-700 transition-colors ${className}`}
          >
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-white" />
              <span className="text-sm font-medium">{formatCountryName(country)}</span>
            </div>
            <div className="flex flex-col ml-2">
              <ChevronUp className="h-3 w-3 text-white" />
              <ChevronDown className="h-3 w-3 text-white mt-[-4px]" />
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-gray-800 border-gray-700 w-[180px]">
          {countries.map((option) => (
            <DropdownMenuItem 
              key={option.value}
              className={country === option.value ? 'bg-gray-700 text-white hover:bg-gray-600' : 'text-white hover:bg-gray-700'}
              onClick={() => handleCountryChange(option.value as any)}
            >
              <span className="mr-2">{option.flag}</span>
              <span>{option.value === "uae" ? "UAE" : option.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Select
      value={country}
      onValueChange={(value) => {
        setCountry(value as any);
      }}
      onOpenChange={setOpen}
    >
      <SelectTrigger 
        className={`${showLabel ? 'w-[160px]' : 'w-[70px]'} border-none bg-transparent focus:ring-0 ${textColor} ${className}`}
      >
        <SelectValue>
          <div className="flex items-center">
            <span className="text-lg">{selectedCountry.flag}</span>
            {showLabel && <span className="ml-2">{selectedCountry.label}</span>}
          </div>
        </SelectValue>
        {open ? (
          <ChevronUp className={`h-4 w-4 ${iconColor}`} />
        ) : (
          <ChevronDown className={`h-4 w-4 ${iconColor}`} />
        )}
      </SelectTrigger>
      <SelectContent className="bg-white text-gray-800 max-h-[200px] w-[200px]">
        <ScrollArea className="h-[150px]">
          {countries.map((option) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              className="cursor-pointer py-2"
            >
              <div className="flex items-center">
                <span className="mr-2 text-lg">{option.flag}</span>
                <span>{option.value === "uae" ? "UAE" : option.label}</span>
                {country === option.value && (
                  <Check className="ml-auto h-4 w-4" />
                )}
              </div>
            </SelectItem>
          ))}
        </ScrollArea>
      </SelectContent>
    </Select>
  );
};

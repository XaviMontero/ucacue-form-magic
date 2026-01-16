import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  rules: string[];
  value: string;
  onChange: (value: string) => void;
}

const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  rules,
  value,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="space-y-2 animate-slide-up">
      <Label htmlFor={id} className="text-foreground font-medium text-sm">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 border-2 border-border bg-card focus:border-primary transition-all duration-300 rounded-lg shadow-sm hover:shadow-card"
      />
      <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg border border-border/50">
        <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Reglas de validación:</p>
          <ul className="text-xs text-muted-foreground space-y-0.5">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-center gap-1">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormField;

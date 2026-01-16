import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, AlertCircle } from "lucide-react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  rules: string[];
  register: UseFormRegisterReturn;
  error?: string;
}

const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  rules,
  register,
  error,
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
        {...register}
        className={`h-12 border-2 bg-card transition-all duration-300 rounded-lg shadow-sm hover:shadow-card ${
          error 
            ? "border-destructive focus:border-destructive" 
            : "border-border focus:border-primary"
        }`}
      />
      {error && (
        <div className="flex items-center gap-2 text-destructive text-sm">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}
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

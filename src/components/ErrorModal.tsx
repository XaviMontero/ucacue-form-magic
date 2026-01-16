import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ErrorModal = ({ isOpen, onClose }: ErrorModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-2 border-destructive/30 shadow-hover">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-red-400/50 p-2 bg-white">
            <img 
              src="/error.jpg" 
              alt="Error - When you see coding" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <DialogTitle className="text-2xl font-display font-bold text-foreground flex items-center justify-center gap-2">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            ¡Ups! Algo falló
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4 py-4">
          <p className="text-lg text-foreground font-medium">
            📚 ¡Sigue practicando! 📚
          </p>
          <p className="text-muted-foreground">
            Los campos del formulario no cumplen con las reglas de validación.
            Revisa cada campo y asegúrate de seguir las indicaciones.
          </p>
          <div className="pt-4">
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-8 py-2 h-auto hover:opacity-90 transition-opacity"
            >
              Intentar de nuevo 💪
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ErrorModal;

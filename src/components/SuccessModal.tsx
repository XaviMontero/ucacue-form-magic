import { useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PartyPopper, Sparkles } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Launch confetti from multiple angles
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: ["#3b82f6", "#22c55e", "#f59e0b", "#ec4899", "#8b5cf6"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: ["#3b82f6", "#22c55e", "#f59e0b", "#ec4899", "#8b5cf6"],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      // Big burst at the start
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#22c55e", "#f59e0b", "#ec4899", "#8b5cf6"],
      });

      frame();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-2 border-primary/20 shadow-hover">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 gradient-success rounded-full flex items-center justify-center animate-bounce-in">
            <PartyPopper className="w-10 h-10 text-secondary-foreground" />
          </div>
          <DialogTitle className="text-2xl font-display font-bold text-foreground flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            ¡Felicidades!
            <Sparkles className="w-6 h-6 text-accent" />
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4 py-4">
          <p className="text-lg text-foreground font-medium">
            🎉 ¡Lograste entender la magia de la programación! 🎉
          </p>
          <p className="text-muted-foreground">
            Has completado exitosamente el formulario. Ahora entiendes cómo
            funcionan los formularios en React.
          </p>
          <div className="pt-4">
            <Button
              onClick={onClose}
              className="gradient-primary text-primary-foreground font-semibold px-8 py-2 h-auto hover:opacity-90 transition-opacity"
            >
              ¡Genial! 🚀
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;

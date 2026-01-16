import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import FormField from "@/components/FormField";
import SuccessModal from "@/components/SuccessModal";
import { GraduationCap, BookOpen, Send } from "lucide-react";

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  edad: string;
  direccion: string;
}

const Index = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    edad: "",
    direccion: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleCloseModal = () => {
    setShowSuccess(false);
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      edad: "",
      direccion: "",
    });
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
          <GraduationCap className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">UCACUE - Práctica de Formularios</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Formulario de Persona
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto flex items-center justify-center gap-2">
          <BookOpen className="w-4 h-4" />
          Aprende cómo funcionan los formularios en React observando las reglas de validación
        </p>
      </div>

      {/* Form Card */}
      <Card className="max-w-2xl mx-auto shadow-card hover:shadow-hover transition-shadow duration-300 border-2 border-border/50">
        <CardHeader className="text-center border-b border-border/50 bg-muted/30">
          <CardTitle className="text-xl font-display text-foreground">
            Datos Personales
          </CardTitle>
          <CardDescription>
            Completa todos los campos y observa las reglas que debería tener cada uno
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                id="nombre"
                label="Nombre"
                placeholder="Ej: Juan"
                value={formData.nombre}
                onChange={handleChange("nombre")}
                rules={[
                  "Campo requerido",
                  "Mínimo 2 caracteres",
                  "Solo letras y espacios",
                ]}
              />
              <FormField
                id="apellido"
                label="Apellido"
                placeholder="Ej: Pérez"
                value={formData.apellido}
                onChange={handleChange("apellido")}
                rules={[
                  "Campo requerido",
                  "Mínimo 2 caracteres",
                  "Solo letras y espacios",
                ]}
              />
            </div>

            <FormField
              id="email"
              label="Correo Electrónico"
              type="email"
              placeholder="Ej: juan.perez@ucacue.edu.ec"
              value={formData.email}
              onChange={handleChange("email")}
              rules={[
                "Campo requerido",
                "Formato válido: usuario@dominio.com",
                "No espacios en blanco",
              ]}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                id="telefono"
                label="Teléfono"
                type="tel"
                placeholder="Ej: 0987654321"
                value={formData.telefono}
                onChange={handleChange("telefono")}
                rules={[
                  "Campo requerido",
                  "Solo números",
                  "10 dígitos exactos",
                  "Debe empezar con 09",
                ]}
              />
              <FormField
                id="edad"
                label="Edad"
                type="number"
                placeholder="Ej: 21"
                value={formData.edad}
                onChange={handleChange("edad")}
                rules={[
                  "Campo requerido",
                  "Número entre 18 y 99",
                  "Solo números enteros",
                ]}
              />
            </div>

            <FormField
              id="direccion"
              label="Dirección"
              placeholder="Ej: Av. Principal 123, Cuenca"
              value={formData.direccion}
              onChange={handleChange("direccion")}
              rules={[
                "Campo requerido",
                "Mínimo 10 caracteres",
                "Máximo 100 caracteres",
              ]}
            />

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-14 gradient-primary text-primary-foreground font-semibold text-lg rounded-xl hover:opacity-90 transition-all duration-300 shadow-card hover:shadow-hover flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Formulario
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Footer note */}
      <p className="text-center text-muted-foreground text-sm mt-8 max-w-md mx-auto">
        💡 <strong>Nota:</strong> En esta práctica, las validaciones no están implementadas.
        Tu tarea es agregar la lógica de validación basándote en las reglas mostradas.
      </p>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccess} onClose={handleCloseModal} />
    </div>
  );
};

export default Index;

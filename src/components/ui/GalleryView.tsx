import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface GalleryViewProps {
  images: string[];
  colloquiumName: string;
  onClose: () => void;
}

export function GalleryView({ images, colloquiumName, onClose }: GalleryViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-500">
      <Card className="border-2 border-slate-200 shadow-xl overflow-hidden">
        <CardHeader className="bg-slate-900 text-white flex flex-row items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <ImageIcon className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl font-bold">Guía Visual: {colloquiumName}</CardTitle>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="text-slate-300 hover:text-white hover:bg-slate-800"
          >
            <X className="h-6 w-6" />
          </Button>
        </CardHeader>
        <CardContent className="p-0 relative bg-slate-100">
          <div className="relative min-h-[500px] flex items-center justify-center p-8">
            <img 
              src={images[currentIndex]} 
              alt={`Guía visual ${currentIndex + 1}`}
              className="max-w-full h-auto rounded-lg shadow-2xl border border-slate-200"
            />
            
            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity"
                  onClick={prev}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity"
                  onClick={next}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
          
          {images.length > 1 && (
            <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-4">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
          <ImageIcon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-bold text-blue-900">Ayuda Teórica Visual</h4>
          <p className="text-sm text-blue-800 mt-1">
            Utiliza estas imágenes como referencia rápida para resolver los ejercicios. 
            Puedes cerrar esta galería en cualquier momento para volver a los problemas.
          </p>
        </div>
      </div>
    </div>
  );
}

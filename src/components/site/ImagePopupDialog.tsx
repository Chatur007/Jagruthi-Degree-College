import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ImagePopupDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc: string;
}

export function ImagePopupDialog({ open, onOpenChange, imageSrc }: ImagePopupDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-md md:max-w-xl lg:max-w-2xl p-0 overflow-hidden border-none bg-transparent shadow-none flex items-center justify-center [&>button]:bg-black/60 [&>button]:text-white [&>button]:hover:bg-black/80 [&>button]:rounded-full [&>button]:p-2 [&>button]:right-2 [&>button]:top-2 [&>button]:opacity-100 [&>button]:hover:opacity-100 [&>button]:border [&>button]:border-white/20 [&>button]:transition-colors [&>button]:cursor-pointer">
        <DialogTitle className="sr-only">Admissions Announcement</DialogTitle>
        <DialogDescription className="sr-only">Notice about admissions for academic year 2026-27</DialogDescription>
        <div className="relative w-full max-h-[85vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-black/5">
          <img
            src={imageSrc}
            alt="Admissions Announcement"
            className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}


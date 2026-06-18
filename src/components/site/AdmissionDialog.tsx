import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { DEPARTMENTS, COURSES } from "@/lib/site-data";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  gender: z.string().min(1, "Select gender"),
  dob: z.string().min(1, "Date of birth is required"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile"),
  email: z.string().trim().email("Enter a valid email").max(255),
  qualification: z.string().trim().min(2, "Required").max(100),
  percentage: z.string().regex(/^\d{1,3}(\.\d+)?$/, "Enter a valid percentage"),
  passingYear: z.string().regex(/^\d{4}$/, "Enter a valid year"),
  department: z.string().min(1, "Select a department"),
  course: z.string().trim().min(1, "Required").max(100),
  address: z.string().trim().min(3, "Required").max(200),
  city: z.string().trim().min(2, "Required").max(80),
  state: z.string().trim().min(2, "Required").max(80),
  pin: z.string().regex(/^\d{6}$/, "Enter a 6-digit PIN"),
});

type AdmissionDialogProps = {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function AdmissionDialog({ trigger, open: controlledOpen, onOpenChange }: AdmissionDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = typeof controlledOpen === "boolean";
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = (nextOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please fix the errors");
      return;
    }
    setSubmitted(true);
    toast.success("Application submitted successfully");
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-16 w-16 text-[var(--gold)]" />
            <h3 className="mt-4 font-display text-2xl font-bold">Application Received</h3>
            <p className="mt-2 text-muted-foreground">
              Thank you! Our admissions team will contact you within 2 working days.
            </p>
            <Button className="mt-6" onClick={close}>Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Admission Application</DialogTitle>
              <DialogDescription>Fill in your details. All fields are required.</DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="space-y-6 pt-2">
              <Section title="Personal Details">
                <Field label="Full Name"><Input name="fullName" required /></Field>
                <Field label="Gender">
                  <Select name="gender">
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Date of Birth"><Input name="dob" type="date" required /></Field>
                <Field label="Mobile Number"><Input name="mobile" inputMode="numeric" maxLength={10} required /></Field>
                <Field label="Email Address" className="sm:col-span-2"><Input name="email" type="email" required /></Field>
              </Section>

              <Section title="Academic Details">
                <Field label="Previous Qualification"><Input name="qualification" required /></Field>
                <Field label="Percentage"><Input name="percentage" required /></Field>
                <Field label="Passing Year"><Input name="passingYear" inputMode="numeric" maxLength={4} required /></Field>
              </Section>

              <Section title="Course Selection">
                <Field label="Department">
                  <Select name="department">
                    <SelectTrigger><SelectValue placeholder="Select Department" /></SelectTrigger>
                    <SelectContent>
                      {DEPARTMENTS.map((d) => (
                        <SelectItem key={d.slug} value={d.slug}>{d.short}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Course">
                  <Select name="course">
                    <SelectTrigger><SelectValue placeholder="Select Course" /></SelectTrigger>
                    <SelectContent>
                      {COURSES.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </Section>

              <Section title="Address Details">
                <Field label="Address" className="sm:col-span-2"><Input name="address" required /></Field>
                <Field label="City"><Input name="city" required /></Field>
                <Field label="State"><Input name="state" required /></Field>
                <Field label="PIN Code"><Input name="pin" inputMode="numeric" maxLength={6} required /></Field>
              </Section>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={close}>Cancel</Button>
                <Button type="submit" className="bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]">
                  Submit Application
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 border-b pb-1 font-display text-lg font-semibold text-[var(--navy)] dark:text-[var(--gold)]">{title}</h4>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`space-y-1.5 ${className ?? ""}`}>
      <Label className="text-sm">{label}</Label>
      {children}
    </div>
  );
}

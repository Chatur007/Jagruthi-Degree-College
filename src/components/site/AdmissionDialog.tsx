// import { useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { CheckCircle2 } from "lucide-react";
// import { DEPARTMENTS, COURSES } from "@/lib/site-data";
// import { z } from "zod";
// import { useToast } from "@/hooks/use-toast";
// import { useLanguage } from "@/hooks/use-language";

// const schema = z.object({
//   fullName: z.string().trim().min(2, "Full name is required").max(100),
//   gender: z.string().min(1, "Select gender"),
//   dob: z.string().min(1, "Date of birth is required"),
//   mobile: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile"),
//   email: z.string().trim().email("Enter a valid email").max(255),
//   qualification: z.string().trim().min(2, "Required").max(100),
//   percentage: z.string().regex(/^\d{1,3}(\.\d+)?$/, "Enter a valid percentage"),
//   passingYear: z.string().regex(/^\d{4}$/, "Enter a valid year"),
//   // department: z.string().min(1, "Select a department"),
//   course: z.string().trim().min(1, "Required").max(100),
//   address: z.string().trim().min(3, "Required").max(200),
//   city: z.string().trim().min(2, "Required").max(80),
//   state: z.string().trim().min(2, "Required").max(80),
//   pin: z.string().regex(/^\d{6}$/, "Enter a 6-digit PIN"),
// });

// type AdmissionDialogProps = {
//   trigger?: React.ReactNode;
//   open?: boolean;
//   onOpenChange?: (open: boolean) => void;
// };

// export function AdmissionDialog({ trigger, open: controlledOpen, onOpenChange }: AdmissionDialogProps) {
//   const [submitted, setSubmitted] = useState(false);
//   const [internalOpen, setInternalOpen] = useState(false);

//   const isControlled = typeof controlledOpen === "boolean";
//   const open = isControlled ? controlledOpen : internalOpen;
//   const setOpen = (nextOpen: boolean) => {
//     if (!isControlled) {
//       setInternalOpen(nextOpen);
//     }
//     onOpenChange?.(nextOpen);
//   };

//   const { toast } = useToast();
//   const{t} = useLanguage();

//   const [formData, setFormData] = useState({
//       fullName: "",
//       gender: "",
//       dob: "",
//       mobile: "",
//       email: "",
//       qualification: "",
//       percentage: "",
//       passingYear: "",
//       course: "",
//       address: "",
//       city: "",
//       state: "",
//       pin: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//  e.preventDefault();
//     setIsSubmitting(true);

//     const form = e.target as HTMLFormElement;
//     const formDataObj = new FormData(form);
//     const payload = {
//       fullName: formDataObj.get("fullName"),
//       gender: formDataObj.get("gender"),
//       dob: formDataObj.get("dob"),
//       mobile: formDataObj.get("mobile"),
//       email: formDataObj.get("email"),
//       qualification: formDataObj.get("qualification"),
//       percentage: formDataObj.get("percentage"),
//       passingYear: formDataObj.get("passingYear"),
//       course: formDataObj.get("course"),
//       address: formDataObj.get("address"),
//       city: formDataObj.get("city"),
//       state: formDataObj.get("state"),
//       pin: formDataObj.get("pin"),
//       };
//     };

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast({
//           title: "Email Sent Successfully!",
//           description: "Thank you for your message! We'll get back to you soon.",
//         });
//         form.reset();
//         setFormData({
//       fullName: "",
//       gender: "",
//       dob: "",
//       mobile: "",
//       email: "",
//       qualification: "",
//       percentage: "",
//       passingYear: "",
//       course: "",
//       address: "",
//       city: "",
//       state: "",
//       pin: "",
//         });
//       } else {
//         toast({
//           title: "Email Failed",
//           description: data.error || "Failed to send email. Please try again later.",
//           variant: "destructive",
//         });
//       }
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       toast({
//         title: "Email Failed",
//         description: "Failed to send email. Please try again later or contact us directly.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const close = () => {
//     setOpen(false);
//     setTimeout(() => setSubmitted(false), 300);
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
//       <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
//         {submitted ? (
//           <div className="py-10 text-center">
//             <CheckCircle2 className="mx-auto h-16 w-16 text-[var(--gold)]" />
//             <h3 className="mt-4 font-display text-2xl font-bold">Application Received</h3>
//             <p className="mt-2 text-muted-foreground">
//               Thank you! Our admissions team will contact you within 2 working days.
//             </p>
//             <Button className="mt-6" onClick={close}>Close</Button>
//           </div>
//         ) : (
//           <>
//             <DialogHeader>
//               <DialogTitle className="font-display text-2xl">Admission Application</DialogTitle>
//               <DialogDescription>Fill in your details. All fields are required.</DialogDescription>
//             </DialogHeader>
//             <form onSubmit={onSubmit} className="space-y-6 pt-2">
//               <Section title="Personal Details">
//                 <Field label="Full Name"><Input name="fullName" required /></Field>
//                 <Field label="Gender">
//                   <Select name="gender">
//                     <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="male">Male</SelectItem>
//                       <SelectItem value="female">Female</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </Field>
//                 <Field label="Date of Birth"><Input name="dob" type="date" required /></Field>
//                 <Field label="Mobile Number"><Input name="mobile" inputMode="numeric" maxLength={10} required /></Field>
//                 <Field label="Email Address" className="sm:col-span-2"><Input name="email" type="email" required /></Field>
//               </Section>

//               <Section title="Academic Details">
//                 <Field label="Previous Qualification"><Input name="qualification" required /></Field>
//                 <Field label="Percentage"><Input name="percentage" required /></Field>
//                 <Field label="Passing Year"><Input name="passingYear" inputMode="numeric" maxLength={4} required /></Field>
//               </Section>

//               <Section title="Course Selection">
//                 {/* <Field label="Department">
//                   <Select name="department">
//                     <SelectTrigger><SelectValue placeholder="Select Department" /></SelectTrigger>
//                     <SelectContent>
//                       {DEPARTMENTS.map((d) => (
//                         <SelectItem key={d.slug} value={d.slug}>{d.short}</SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </Field> */}
//                 <Field label="Course">
//                   <Select name="course">
//                     <SelectTrigger><SelectValue placeholder="Select Course" /></SelectTrigger>
//                     <SelectContent>
//                       {COURSES.map((c) => (
//                         <SelectItem key={c} value={c}>{c}</SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </Field>
//               </Section>

//               <Section title="Address Details">
//                 <Field label="Address" className="sm:col-span-2"><Input name="address" required /></Field>
//                 <Field label="City"><Input name="city" required /></Field>
//                 <Field label="State"><Input name="state" required /></Field>
//                 <Field label="PIN Code"><Input name="pin" inputMode="numeric" maxLength={6} required /></Field>
//               </Section>

//               <div className="flex justify-end gap-2">
//                 <Button type="button" variant="outline" onClick={close}>Cancel</Button>
//                 <Button type="submit" className="bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]">
//                   Submit Application
//                 </Button>
//               </div>
//             </form>
//           </>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }

// function Section({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div>
//       <h4 className="mb-3 border-b pb-1 font-display text-lg font-semibold text-[var(--navy)] dark:text-[var(--gold)]">{title}</h4>
//       <div className="grid gap-4 sm:grid-cols-2">{children}</div>
//     </div>
//   );
// }

// function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
//   return (
//     <div className={`space-y-1.5 ${className ?? ""}`}>
//       <Label className="text-sm">{label}</Label>
//       {children}
//     </div>
//   );
// }
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { COURSES } from "@/lib/site-data";
import { z } from "zod";
import { toast } from "sonner";
import { sendAdmissionEmail } from "@/lib/api/admission.server";


const schema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  gender: z.string().min(1, "Select gender"),
  dob: z.string().min(1, "Date of birth is required"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile"),
  email: z.string().trim().email("Enter a valid email").max(255),
  qualification: z.string().trim().min(2, "Required").max(100),
  percentage: z.string().regex(/^\d{1,3}(\.\d+)?$/, "Enter a valid percentage"),
  passingYear: z.string().regex(/^\d{4}$/, "Enter a valid year"),
  course: z.string().trim().min(1, "Required").max(100),
  address: z.string().trim().min(3, "Required").max(200),
  city: z.string().trim().min(2, "Required").max(80),
  state: z.string().trim().min(2, "Required").max(80),
  pin: z.string().regex(/^\d{6}$/, "Enter a 6-digit PIN"),
});

type FormData = z.infer<typeof schema>;

const emptyForm: FormData = {
  fullName: "",
  gender: "",
  dob: "",
  mobile: "",
  email: "",
  qualification: "",
  percentage: "",
  passingYear: "",
  course: "",
  address: "",
  city: "",
  state: "",
  pin: "",
};

type AdmissionDialogProps = {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function AdmissionDialog({ trigger, open: controlledOpen, onOpenChange }: AdmissionDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const isControlled = typeof controlledOpen === "boolean";
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = (nextOpen: boolean) => {
    if (!isControlled) setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name as keyof FormData]: undefined }));
  };

  const handleSelectChange = (name: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendAdmissionEmail({ data: result.data });

      toast.success("Application Submitted!", {
        description: "Our admissions team will contact you within 2 working days.",
      });
      setFormData(emptyForm);
      setErrors({});
      setSubmitted(true);
    } catch (error: any) {
      console.error("Failed to submit application:", error);
      toast.error("Submission Failed", {
        description: error?.message || "Failed to submit. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setErrors({});
    }, 300);
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
              {/* Personal Details */}
              <Section title="Personal Details">
                <Field label="Full Name" error={errors.fullName}>
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                </Field>

                <Field label="Gender" error={errors.gender}>
                  <Select value={formData.gender} onValueChange={handleSelectChange("gender")}>
                    <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field label="Date of Birth" error={errors.dob}>
                  <Input
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                </Field>

                <Field label="Mobile Number" error={errors.mobile}>
                  <Input
                    name="mobile"
                    inputMode="numeric"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                  />
                </Field>

                <Field label="Email Address" className="sm:col-span-2" error={errors.email}>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                  />
                </Field>
              </Section>

              {/* Academic Details */}
              <Section title="Academic Details">
                <Field label="Previous Qualification" error={errors.qualification}>
                  <Input
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    placeholder="e.g. 12th / Diploma"
                  />
                </Field>

                <Field label="Percentage / CGPA" error={errors.percentage}>
                  <Input
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleInputChange}
                    placeholder="e.g. 85.5"
                  />
                </Field>

                <Field label="Passing Year" error={errors.passingYear}>
                  <Input
                    name="passingYear"
                    inputMode="numeric"
                    maxLength={4}
                    value={formData.passingYear}
                    onChange={handleInputChange}
                    placeholder="e.g. 2024"
                  />
                </Field>
              </Section>

              {/* Course Selection */}
              <Section title="Course Selection">
                <Field label="Course" error={errors.course}>
                  <Select value={formData.course} onValueChange={handleSelectChange("course")}>
                    <SelectTrigger><SelectValue placeholder="Select a course" /></SelectTrigger>
                    <SelectContent>
                      {COURSES.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </Section>

              {/* Address Details */}
              <Section title="Address Details">
                <Field label="Address" className="sm:col-span-2" error={errors.address}>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Street / House No."
                  />
                </Field>

                <Field label="City" error={errors.city}>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                  />
                </Field>

                <Field label="State" error={errors.state}>
                  <Input
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                  />
                </Field>

                <Field label="PIN Code" error={errors.pin}>
                  <Input
                    name="pin"
                    inputMode="numeric"
                    maxLength={6}
                    value={formData.pin}
                    onChange={handleInputChange}
                    placeholder="6-digit PIN"
                  />
                </Field>
              </Section>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={close} disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]"
                >
                  {isSubmitting ? "Submitting…" : "Submit Application"}
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
      <h4 className="mb-3 border-b pb-1 font-display text-lg font-semibold text-[var(--navy)] dark:text-[var(--gold)]">
        {title}
      </h4>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Field({
  label,
  children,
  className,
  error,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  error?: string;
}) {
  return (
    <div className={`space-y-1.5 ${className ?? ""}`}>
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
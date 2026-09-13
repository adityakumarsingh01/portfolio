"use client";

import { FormEvent } from "react";

export function FormWrapper({ 
  action, 
  children,
  className
}: { 
  action: (payload: FormData) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const fileInputs = form.querySelectorAll<HTMLInputElement>('input[type="file"]');
    
    for (let i = 0; i < fileInputs.length; i++) {
      const input = fileInputs[i];
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        // 4.5 MB limit
        if (file.size > 4.5 * 1024 * 1024) {
          e.preventDefault();
          alert(`The file "${file.name}" is too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Vercel has a strict 4.5MB limit for uploads. Please compress the file or paste an external URL instead!`);
          return;
        }
      }
    }
  };

  return (
    <form action={action} onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}

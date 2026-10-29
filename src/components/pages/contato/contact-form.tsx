"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { contato } from "@/lib/content/contato";

type Status = "idle" | "loading" | "success";

const f = contato.form;

// Framer form input: white, 2px radius, 15px/1.2em Inter; focus = 1px inset border rgba(0,0,0,.62) (textarea .46)
const field = "relative flex items-center rounded-[2px] bg-white";
const focus = "focus-within:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.62)]";
const input =
  "w-full min-w-0 bg-transparent text-[15px] leading-[1.2em] tracking-normal text-ink outline-none placeholder:text-black/62";

function Label({ text, children, className = "" }: { text: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex w-full flex-col gap-[10px] ${className}`}>
      <span className="t-16 text-ink">{text}</span>
      {children}
    </label>
  );
}

/** Rotating 20px ring, as in the Framer "Loading" button variant. */
function Spinner() {
  return (
    <span
      aria-hidden
      className="size-5 animate-spin rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0)_7deg,#fff_342deg)] [animation-duration:1s] [mask:radial-gradient(farthest-side,transparent_calc(100%-2px),#000_calc(100%-2px))]"
    />
  );
}

/**
 * No backend: a valid submit only plays the Framer button states (Loading → "Obrigado!")
 * and clears the fields. Nothing is sent anywhere. Validation is the browser's native one, like the original.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const form = e.currentTarget;
    setStatus("loading");
    timer.current = setTimeout(() => {
      form.reset();
      setStatus("success");
    }, 1000);
  };

  const onEdit = () => status === "success" && setStatus("idle");

  return (
    <form
      onSubmit={onSubmit}
      onInput={onEdit}
      className="flex w-full flex-col items-center gap-6 rounded-[2px] bg-mist p-7"
    >
      <Label text={f.enquiry.label}>
        <span className={`${field} ${focus} h-[50px] pr-4`}>
          <select name="enquiry" required defaultValue={f.enquiry.options[0]} className={`${input} h-full cursor-default appearance-none p-4`}>
            {f.enquiry.options.map((o) => (
              <option key={o} value={o} className="text-black">
                {o}
              </option>
            ))}
          </select>
          <svg aria-hidden viewBox="0 0 16 16" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2" fill="none">
            <path d="M3.5 6 8 10.5 12.5 6" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Label>

      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Label text={f.name.label}>
          <span className={`${field} ${focus} p-4`}>
            <input name="name" type="text" required autoComplete="name" placeholder={f.name.placeholder} className={input} />
          </span>
        </Label>
        <Label text={f.phone.label}>
          <span className={`${field} ${focus} p-4`}>
            <input name="phone" type="tel" autoComplete="tel" placeholder={f.phone.placeholder} className={input} />
          </span>
        </Label>
      </div>

      <Label text={f.email.label}>
        <span className={`${field} ${focus} p-4`}>
          <input name="email" type="email" required autoComplete="email" placeholder={f.email.placeholder} className={input} />
        </span>
      </Label>

      <Label text={f.message.label}>
        <span className={`${field} focus-within:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.46)]`}>
          <textarea
            name="message"
            required
            placeholder={f.message.placeholder}
            className={`${input} block h-[140px] min-h-[140px] resize-y p-3`}
          />
        </span>
      </Label>

      <button
        type="submit"
        aria-busy={status === "loading"}
        className="flex h-12 w-full cursor-pointer items-center justify-center rounded-[2px] bg-ink transition-[opacity,background-color] duration-300 hover:opacity-75 active:bg-black/46 active:opacity-100"
      >
        {status === "loading" ? (
          <Spinner />
        ) : (
          <span className="t-18 text-white" aria-live="polite">
            {status === "success" ? f.success : f.submit}
          </span>
        )}
      </button>
    </form>
  );
}

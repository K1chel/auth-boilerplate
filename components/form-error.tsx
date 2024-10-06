interface FormErrorProps {
  message?: string | null;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return;

  return (
    <div className="w-full rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive sm:text-sm">
      <p>{message}</p>
    </div>
  );
};

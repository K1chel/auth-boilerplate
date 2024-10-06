interface FormSuccessProps {
  message?: string | null;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return;

  return (
    <div className="w-full rounded-lg bg-emerald-500/10 px-3 py-2 text-xs text-emerald-500 sm:text-sm">
      <p>{message}</p>
    </div>
  );
};

interface IButtonProps {
  value: string;
  onClick: () => void;
}

export function Button({ value, onClick }: IButtonProps) {
  return (
    <button type="button" onClick={onClick}>{value}</button>
  );
}

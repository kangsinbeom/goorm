import { ChangeEvent, useCallback, useState } from "react";

export const useInput = <T,>(
  initialState: T
): [T, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [form, setForm] = useState<T>(initialState);
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      const newValue = { ...form, [name]: value };
      setForm(newValue);
    },
    [form]
  );
  return [form, onChange];
};

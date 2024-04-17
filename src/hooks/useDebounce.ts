import { useEffect, useState } from 'react';

export default function useDebounce(value: string, delay: number) {
  // State này sẽ lưu giá trị sau cùng được trả về sau khi debounce
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Thiết lập một timer để thay đổi giá trị sau khi delay thời gian nhất định
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear timeout nếu value hoặc delay thay đổi
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Chỉ re-run nếu value hoặc delay thay đổi

  return debouncedValue;
}

import { FC, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

type InputProps = HTMLInputProps & {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
};

export const Input: FC<InputProps> = memo(
  ({ className, value, onChange, type = 'text', autoFocus, ...otherProps }) => {
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    useEffect(() => {
      if (autoFocus) {
        ref.current?.focus();
      }
    }, [autoFocus]);

    return (
      <div className={classNames(cls.input, {}, [className])}>
        <input ref={ref} type={type} value={value} onChange={onChangeHandler} {...otherProps} />
      </div>
    );
  },
);

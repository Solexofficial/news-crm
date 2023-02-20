import { classNames } from 'shared/lib/classNames2/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className = '' }: LoaderProps) => {
  return (
    <div className={classNames(cls['loading-spinner'], {}, [className])}>
      <div className={cls['loading-spinner__inner']}>
        <div />
        <div />
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
      </div>
    </div>
  );
};

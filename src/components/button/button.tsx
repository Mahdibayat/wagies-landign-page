import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

//==== STYLEs
import styles from './button.module.css';

interface ButtonType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  kind?: 'blue' | 'yellow' | 'social' | 'white';
}

const Button = ({ kind, ...props }: ButtonType) => {
  let customClass = props.className + ' ' + styles.btn;

  delete props.className;

  if (typeof kind !== 'undefined') {
    switch (kind) {
      case 'blue':
        customClass += ' ' + styles.bBtn;
        break;
      case 'yellow':
        customClass += ' ' + styles.yBtn;
        break;
      case 'white':
        customClass += ' ' + styles.wBtn;
        break;
      case 'social':
        customClass += ' ' + styles.slBtn;
        break;
      default:
        break;
    }
  }

  return (
    <button {...props} className={customClass}>
      {props.children}
    </button>
  );
};

export default Button;

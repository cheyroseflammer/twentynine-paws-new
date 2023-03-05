import Link from 'next/link';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonstyle, buttonsize }) => {
  const checkbuttonstyle = STYLES.includes(buttonstyle) ? buttonstyle : STYLES[0];
  const checkbuttonsize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];
  return (
    <Link href='/forms' className='btn-mobile'>
      <button
        className={`btn ${checkbuttonstyle} ${checkbuttonsize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
export default Button;

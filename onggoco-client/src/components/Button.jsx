  import { Link } from 'react-router-dom';

const variantClasses = {
  primary:
    'bg-[#ffd600] text-[#1a237e] border-[#ffd600] shadow-sm hover:bg-[#ffe066] hover:text-[#1a237e] hover:shadow-md',
  secondary:
    'bg-white text-[#1a237e] border-[#1a237e] shadow-sm hover:bg-[#f7fafc] hover:text-[#1a237e] hover:shadow-md',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-2xl border px-7 py-3 text-lg font-bold tracking-wide transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#ffd600] focus:ring-offset-2',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;

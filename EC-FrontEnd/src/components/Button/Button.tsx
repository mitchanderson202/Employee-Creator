import "./Button.scss";

interface ButtonProps {
  data: string;
  onClick?: () => void;
}

const Button = ({ data, onClick }: ButtonProps) => {
  return (
    <button className="Button" onClick={onClick}>
      {data}
    </button>
  );
};

export default Button;

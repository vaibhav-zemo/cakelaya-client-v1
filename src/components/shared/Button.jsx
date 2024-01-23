import { Styledbutton } from "../styles/Button.styled";

export default function Button({ text, btnType }) {
  return <Styledbutton className={btnType}>{text}</Styledbutton>;
}

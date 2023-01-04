import { VscFeedback } from "react-icons/vsc";

function Header({ text, bgColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>
          {text}
          <VscFeedback />
        </h2>

      </div>
    </header>
  )
};

export default Header;

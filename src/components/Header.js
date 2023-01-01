function Header({text, bgColor}) {
    const headerStyles ={
        backgroundColor: bgColor,
    };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
};

export default Header;

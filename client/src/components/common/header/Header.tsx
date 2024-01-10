// Components
import Logo from "@components/common/logo/Logo";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container_main">
        <Logo size="small" hasTitle={true} />
      </div>
    </header>
  );
};

export default Header;

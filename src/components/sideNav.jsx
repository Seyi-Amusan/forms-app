import NavLinkItem from "./navLinkItem";

function SideNav() {
    return (
        <div className="side-nav">
          <NavLinkItem index='1' linkText='your info' step='step-one'/>
          <NavLinkItem index='2' linkText='select plans' step='step-two'/>
          <NavLinkItem index='3' linkText='add-ons' step='step-three'/>
          <NavLinkItem index='4' linkText='summary' step='step-four'/>
        </div>
        
    );
}

export default SideNav;
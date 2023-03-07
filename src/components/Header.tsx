import { Component } from "react";

type HeaderProps = {
  title: string;
  subtitle?: string;
  fontsize: number;
};

export class Header extends Component<HeaderProps> {
  render() {
    console.log(`inside the header component this is `, this);
    const { title, subtitle } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </>
    );
  }
}

export default Header;

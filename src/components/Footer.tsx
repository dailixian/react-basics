type FooterProps = {
  year: number;
  company: string;
};

const Footer = ({ year, company }: FooterProps) => {
  return (
    <div>
      Copy; {year} -All rights reserved by {company}
    </div>
  );
};

Footer.defaultProps = {
    year: 2023,
    company: "Aptos"
};

export default Footer;

const Footer = () => {
  return (
    <div className="container relative mx-auto py-8 border-t border-primary/10">
      <div className="flex justify-center items-center text-sm text-muted-foreground">
        <p >
          طراحی و توسعه توسط{" "}
          <a
            href="https://github.com/MahmoodHashem"
            target="_blank"
            className="text-primary hover:underline"
          >
            محمود هاشمی{" "}
          </a>{" "}
          © ۱۴۰۳
        </p>
      </div>
    </div>
  );
};

export default Footer;

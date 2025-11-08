interface HeadingProps {
  text: string;
  className: string;
}

const HeadingComponent = ({ text, className = "" }: HeadingProps) => {
  return (
    <h2
      className={`rounded-sm text-[#5f17eb] py-1 text-lg font-bold w-fit ${className}`}
    >
      {text}
    </h2>
  );
};

export default HeadingComponent;

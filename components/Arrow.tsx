import Image from 'next/image';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick} 
    >
      <Image
        src="/NextArrow.png"
        alt="arrow"
        width={62}
        height={62}
        sizes="(max-width: 768px) 40px, 60px"   
      />
    </div>
  );
}

export {NextArrow};

const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick} 
    >
      <Image
        src="/PrevArrow.png"
        alt="arrow"
        width={62}
        height={62}
        sizes="(max-width: 768px) 40px, 60px"   
      />
    </div>
  );
}

export { PrevArrow };

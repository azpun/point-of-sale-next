export const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={` border rounded-md ${className}`} {...props} />;
};

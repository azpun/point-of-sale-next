export const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={`p-4 border rounded-md ${className}`} {...props} />;
};

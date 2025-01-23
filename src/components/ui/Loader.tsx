export default function Loading() {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute top-[60px] left-0 w-12 h-[5px] bg-primary/20 rounded-full loader-shadow"></div>
      <div className="absolute w-full h-full bg-primary rounded-md loader-jump"></div>
    </div>
  );
}

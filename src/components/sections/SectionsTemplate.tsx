type Props = {
  children: React.ReactNode;
  heading: string;
  disc: string;
};

export default function SectionsTemplate({ children, heading, disc }: Props) {
  return (
    <section className="py-36 flex flex-col gap-16">
      <div className="flex flex-col items-center">
        <h2 className="text-center md:text-5xl text-4xl font-bold mb-4 text-primary-dark">
          {heading}
        </h2>
        <p className="text-center w-full text-primary-word mb-8 max-w-2xl">
          {disc}
        </p>
      </div>
      <div>{children}</div>
    </section>
  );
}

type HeaderProps = {
  title: string;
  description: string;
};

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
        {title}
      </h1>
      <p className="text-slate-300 text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  );
}

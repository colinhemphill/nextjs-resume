interface ProseProps {
  html: string;
}

const Prose: React.FC<ProseProps> = ({ html }) => {
  return (
    <div
      className="prose mt-2 text-base text-neutral-12"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;

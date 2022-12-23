interface ProseProps {
  html: string;
}

const baseClasses = 'prose prose-neutral dark:prose-invert max-w-none mt-2';

const anchorClasses =
  'prose-a:underline prose-a:decoration-accent-light-9 prose-a:decoration-solid prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:decoration-inherit dark:prose-a:decoration-accent-dark-9';

const paragraphClasses = 'prose-p:mb-2 prose-p:mt-0 prose-p:leading-6';

const Prose: React.FC<ProseProps> = ({ html }) => {
  return (
    <div
      className={`${baseClasses} ${anchorClasses} ${paragraphClasses}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;

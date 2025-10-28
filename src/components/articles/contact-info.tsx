import { PrivateField, personal } from '@content';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import { SiGithub, SiLinkedIn } from '@icons';
import { ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';

interface ContactInformationProperties {
  privateInformation?: PrivateField[];
}

export default function ContactInformation({
  privateInformation,
}: ContactInformationProperties): ReactNode {
  return (
    <article className="space-y-4">
      <SectionHeading
        Icon={IdentificationIcon}
        level={3}
        text="Contact Information"
      />

      <ul className="space-y-1">
        <li>
          <strong>Location:</strong> {personal.location}
        </li>

        {/* private access required */}
        {privateInformation?.map((privateField) => (
          <li key={privateField.label}>
            <strong>{privateField.label}</strong>{' '}
            <div dangerouslySetInnerHTML={{ __html: privateField.body.html }} />
          </li>
        ))}

        {personal.linkedInUrl && (
          <li>
            <a
              className="text-link inline-flex items-center gap-2"
              href={personal.linkedInUrl}
            >
              <SiLinkedIn size="1em" /> LinkedIn
            </a>
          </li>
        )}
        {personal.githubUrl && (
          <li>
            <a
              className="text-link inline-flex items-center gap-2"
              href={personal.githubUrl}
            >
              <SiGithub size="1em" /> GitHub
            </a>
          </li>
        )}
      </ul>
    </article>
  );
}

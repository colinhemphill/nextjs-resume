import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { getCMSIntegration } from '../../cms';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
  personalInformation: CMSPersonalInformation<unknown>;
  privateInformation?: CMSPrivateInformation<unknown>[];
}

const ContactInformation = (props: Props): JSX.Element => {
  const { personalInformation, privateInformation } = props;
  const CMS = getCMSIntegration();

  return (
    <article>
      <SectionHeader icon={faIdCard} text="Contact Information" />
      <ul className="list-unstyled">
        <li>
          <div className="row mt-md-0 mt-xxxs">
            <div className="col-lg-2 col-sm-3">
              <strong>Location:</strong>
            </div>
            <div className="col">{personalInformation.location}</div>
          </div>
        </li>
        {privateInformation &&
          privateInformation.map((privateField) => (
            <li key={privateField.label}>
              <div className="row mt-md-0 mt-xxxs no-paragraph-margins">
                <div className="col-lg-2 col-sm-3">
                  <strong>{privateField.label}:</strong>
                </div>
                <div className="col">
                  <CMS.RichTextComponent richText={privateField.content} />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default ContactInformation;

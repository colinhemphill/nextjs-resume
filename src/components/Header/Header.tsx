import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import React from 'react';
import styles from './Header.module.scss';

interface Props {
  pdf?: boolean;
  secret?: string;
  subtitle: string;
  title: string;
}

const Header = (props: Props): JSX.Element => {
  const { pdf = false, secret, subtitle, title } = props;

  let pdfAPI = '/api/pdf';
  if (secret) {
    pdfAPI += `?secret=${secret}`;
  }

  return (
    <header className={styles.header}>
      <div className={pdf ? 'container-fluid' : 'container'}>
        <div
          className={classnames('row align-items-center', {
            'text-center': pdf,
            'text-md-start text-center': !pdf,
          })}
        >
          <div className="col-md">
            <h1 className="text-white">{title}</h1>
            <h2 className="text-white mb-0">{subtitle}</h2>
          </div>
          {!pdf && (
            <div className="col-md-auto mt-md-0 mt-xxs d-print-none d-block">
              <a
                className="btn btn-dark btn-lg"
                href={pdfAPI}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="me-xxxs" icon={faFilePdf} />
                Download as PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

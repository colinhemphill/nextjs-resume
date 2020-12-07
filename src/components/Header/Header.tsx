import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Header.module.scss';

interface Props {
  subtitle: string;
  title: string;
}

const Header = (props: Props): JSX.Element => {
  const { subtitle, title } = props;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row align-items-center text-md-left text-center">
          <div className="col-md">
            <h1 className="text-white">{title}</h1>
            <h2 className="text-white">{subtitle}</h2>
          </div>
          <div className="col-md-auto mt-md-0 mt-xxs d-print-none">
            <a className="btn btn-dark btn-lg" href="/api/pdf" target="_blank">
              <FontAwesomeIcon className="mr-xxxs" icon={faFilePdf} />
              Download as PDF
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

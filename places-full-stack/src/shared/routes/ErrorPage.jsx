import React, { Fragment } from 'react';

const ErrorPage = () => {
  const title = 'Not found!';
  const message = 'Could not find resource or page.';

  return (
    <Fragment>
      <main>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;

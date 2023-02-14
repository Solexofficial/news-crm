/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from 'react';

import { Button } from 'shared/ui/Button';

export const BugButton = () => {
  const [error, setError] = useState(false);

  const throwErr = () => setError((prev) => !prev);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={throwErr}>throw Error</Button>;
};

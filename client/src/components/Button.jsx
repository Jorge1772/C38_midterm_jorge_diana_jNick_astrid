import React from 'react';
import Button from 'react-bootstrap/Button';

function MainButton() {
  return (
    <div className="mb-2">
      <Button variant="secondary" size="lg" block>
        Block level button
      </Button>
    </div>
  );
}

export default MainButton;

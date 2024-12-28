import React from 'react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

const AddEvent = () => {
  return (
    <Button
      size='lg'
      variant='destructive'
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }
    >
      Click me
    </Button>
  );
};

export default AddEvent;

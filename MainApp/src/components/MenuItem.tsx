// MenuItem.tsx
import React from 'react';

interface MenuItemProps {
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div style={{ margin: '5px', cursor: 'pointer' }} onClick={onClick}>
      {label}
    </div>
  );
};

export default MenuItem;
